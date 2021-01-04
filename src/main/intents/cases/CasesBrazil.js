import axios from 'axios'
import config from 'config'
import { Text } from 'dialogflow-fulfillment'

const tokenAPICovid = config.get('App.Auth.tokenAPICovid')
export class CasesBrazil {
  static async execute (agent) {
    let placeType = 'city'
    let city = agent.parameters.location.city
    const state = agent.parameters.states

    if (state && !city) {
      placeType = 'state'
      city = ''
    }
    const casesCovidData = await axios.get(`https://api.brasil.io/v1/dataset/covid19/caso_full/data/?place_type=${placeType}&city=${city}&state=${state}&is_last=True`,
      {
        headers: {
          Authorization: `Token ${tokenAPICovid}`
        }
      })
      .then(res => res.data)
      .catch(err => {
        console.log(err)
      })

    console.log(casesCovidData.results[0])
    agent.add(new Text('casos no brasil'))
  }
}
