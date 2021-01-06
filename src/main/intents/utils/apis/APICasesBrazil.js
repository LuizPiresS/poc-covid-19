import axios from 'axios'
import config from 'config'

export class APICasesBrazil {
  /**
   * Pega os dados dos casos de covid no Brasil por estadado ou Cidade
   * @param agent
   * @returns {Promise<AxiosResponse<any> | void>}
   */
  async getCasesFromStatesOrCities (agent) {
    const tokenAPICovid = config.get('App.Auth.tokenAPICovid')

    let placeType = 'city'
    let city = agent.parameters.location[0].city
    const state = agent.parameters.states
    if (state && !city) {
      placeType = 'state'
      city = null
    }

    return axios.get(`https://api.brasil.io/v1/dataset/covid19/caso_full/data/?place_type=${placeType}&city=${city}&state=${state}&is_last=True`,
      {
        headers: {
          Authorization: `Token ${tokenAPICovid}`
        }
      })
      .then(res => {
        return `
Aqui estão os dados mais recentes para ${city} ${state}:

⚠ Total de casos:

- Confirmados: ${res.data.results[0].last_available_confirmed}
- Mortes: ${res.data.results[0].last_available_deaths}

⚠ Casos no dia de hoje:

- Confirmados: ${res.data.results[0].new_confirmed}
- Mortes: ${res.data.results[0].new_deaths}

Posso ajudar em algo mais?`
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

Posso ajudar em algo mais?
`
      })
      .catch(err => {
        console.log(err)
      })
  }
}
