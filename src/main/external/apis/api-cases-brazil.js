import axios from 'axios'
import config from 'config'

export class ApiCasesBrazil {
  /**
   * Pega as informações sobre o número de casos no brasil por estado
   * @returns {Promise<string | void>}
   * @param state
   */
  async getCasesByStates (state) {
    const tokenAPICovid = config.get('App.Auth.tokenAPICovid')

    return await axios.get(`https://api.brasil.io/v1/dataset/covid19/caso_full/data/?state=${state}&place_type=state&is_last=True`,
      {
        headers: {
          Authorization: `Token ${tokenAPICovid}`
        }
      })
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
        if (err.response.status === 500 || err.response.status === 400) {
          return {
            statusCode: 500
          }
        }
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

    return await axios.get(`https://api.brasil.io/v1/dataset/covid19/caso_full/data/?city=${city}&place_type=city&state=${state}&is_last=True`,
      {
        headers: {
          Authorization: `Token ${tokenAPICovid}`
        }
      })
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
        if (err.response.status === 500 || err.response.status === 400) {
          return {
            statusCode: 500
          }
        }
      })
  }

  /**
   * Trás as informações sobre o número de casos no brasil
   * @returns {Promise<string | void>}
   */
  async getCasesFromCountries () {
    return await axios.get('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .catch(err => {
        console.log(err)
        if (err.response.status === 500 || err.response.status === 400) {
          return {
            statusCode: 500
          }
        }
      })
  }
}
