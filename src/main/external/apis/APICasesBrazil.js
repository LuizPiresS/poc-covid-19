import axios from 'axios'
import config from 'config'
import { Text } from 'dialogflow-fulfillment-helper'

export class APICasesBrazil {
  /**
   * Pega as informações sobre o número de casos no brasil por estado
   * @returns {Promise<string | void>}
   * @param state
   */
  async getCasesByStates (state) {
    const tokenAPICovid = config.get('App.Auth.tokenAPICovid')

    return axios.get(`https://api.brasil.io/v1/dataset/covid19/caso_full/data/?state=${state}&place_type=state&is_last=True`,
      {
        headers: {
          Authorization: `Token ${tokenAPICovid}`
        }
      })
      .then(res => {
        let messageSPRJ
        if (res.data.results[0].state === 'SP') {
          messageSPRJ = '👉 Para informações sobre a cidade de São Paulo busque por:\n ' +
            'São Paulo SP  👈'
        } else if (res.data.results[0].state === 'RJ') {
          messageSPRJ = '👉 Para informações sobre a cidade do Rio de Janeiro busque por:\n ' +
            'Rio de Janeiro RJ  👈'
        } else {
          messageSPRJ = ''
        }
        return `
Aqui estão os dados mais recentes para o estado ${state}:

⚠ Total de casos:

- Confirmados: ${res.data.results[0].last_available_confirmed}
- Mortes: ${res.data.results[0].last_available_deaths}

⚠ Casos no dia de hoje:

- Confirmados: ${res.data.results[0].new_confirmed}
- Mortes: ${res.data.results[0].new_deaths}

 ${messageSPRJ}`
      })
      .catch(err => {
        console.log(err)
      })
  }

  /**
   * Pega as informações sobre o número de casos no brasil por cidade
   * @returns {Promise<string | void>}
   * @param city
   * @param state
   */

  async getCasesByCities (city, state) {
    const tokenAPICovid = config.get('App.Auth.tokenAPICovid')

    return axios.get(`https://api.brasil.io/v1/dataset/covid19/caso_full/data/?city=${city}&place_type=city&state=${state}&is_last=True`,
      {
        headers: {
          Authorization: `Token ${tokenAPICovid}`
        }
      })
      .then(res => {
        if (res.data.count === 0) {
          return 'Sinto muito! Por enquanto meu banco de dados\n' +
            'ainda não possui estas informações detalhadas.\n' +
            '\n' +
            'Mas estou sempre aprendendo. Você pode\n' +
            'tentar de novo no futuro.'
        }
        if (res.data.count > 1) {
          return `O Brasil possui mais de uma cidade com o nome de ${res.data.results[0].city}, por favor informe a cidade e o estado para que eu possa te ajudar\n\n 👉<nome da cidade> <nome do estado>👈`
        }
        return `
Aqui estão os dados mais recentes para a cidade de ${city}:

⚠ Total de casos:

- Confirmados: ${res.data.results[0].last_available_confirmed}
- Mortes: ${res.data.results[0].last_available_deaths}

⚠ Casos no dia de hoje:

- Confirmados: ${res.data.results[0].new_confirmed}
- Mortes: ${res.data.results[0].new_deaths}

`
      })
      .catch(err => {
        console.log(err)
      })
  }

  /**
   * Trás as informações sobre o número de casos no brasil
   * @param agent
   * @returns {Promise<string | void>}
   */
  async getCasesFromCountries (agent) {
    if (agent.parameters.country !== 'Brasil') {
      agent.add(new Text('Desculpe, no momento eu consigo te\n ' +
              'informar apenas sobre casos\n ' +
              'de Coronavírus no Brasil. 😕'))
      agent.add(new Text('Qual local você quer consultar? 🔎'))
    }
    if (agent.parameters.country === 'Brasil') {
      return axios.get('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
        .then(res => {
          return `Aqui estão os dados mais recentes para o Brasil:

⚠ Total de casos:

- Confirmados: ${res.data.data.confirmed}
- Recuperados: ${res.data.data.recovered}
- Mortes: ${res.data.data.deaths}

Você pode consultar o status de casos de
qualquer cidade ou estado no Brasil.

Qual local você quer consultar? 🔎
`
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
