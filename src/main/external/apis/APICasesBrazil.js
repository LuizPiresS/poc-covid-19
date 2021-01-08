import axios from 'axios'
import config from 'config'

export class APICasesBrazil {
  /**
   * Pega as informações sobre o número de casos no brasil por estado
   * @param agent
   * @returns {Promise<string | void>}
   */
  async getCasesByStates (agent) {
    const tokenAPICovid = config.get('App.Auth.tokenAPICovid')

    const state = agent.parameters.states

    return axios.get(`https://api.brasil.io/v1/dataset/covid19/caso_full/data/?state=${state}&place_type=state&is_last=True`,
      {
        headers: {
          Authorization: `Token ${tokenAPICovid}`
        }
      })
      .then(res => {
        let messageSPRJ
        if (agent.parameters.states === 'SP') {
          messageSPRJ = '👉 Para informações sobre a cidade de São Paulo busque por:\n ' +
            'São Paulo SP  👈'
        } else if (agent.parameters.states === 'RJ') {
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
   * @param agent
   * @returns {Promise<string | void>}
   */
  async getCasesByCities (agent) {
    const tokenAPICovid = config.get('App.Auth.tokenAPICovid')

    const city = agent.parameters.location.city
    const state = agent.parameters.states

    return axios.get(`https://api.brasil.io/v1/dataset/covid19/caso_full/data/?city=${city}&place_type=city&state=${state}&is_last=True`,
      {
        headers: {
          Authorization: `Token ${tokenAPICovid}`
        }
      })
      .then(res => {
        if (res.data.count > 1) {
          return `O Brasil possui mais de uma cidade com o nome de ${city}, por favor informe a cidade e o estado para que eu possa te ajudar\n\n 👉<nome da cidade> <nome do estado>👈`
        }
        if (res.data.results[0].last_available_confirmed === 0) {
          return `A cidade de ${city} não possui pessoas infectadas pelo COVID-19`
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

  async getCasesFromCountries (agent) {
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
