import { Text } from 'dialogflow-fulfillment-helper'

import { APICasesBrazil } from '../utils/apis/APICasesBrazil'

export class CasesBrazil {
  static async execute (agent) {
    try {
      const country = agent.parameters.location[0].country

      const apiCasesBrazil = new APICasesBrazil()
      if (country === 'Brasil') {
        console.log('entrou no brasil')
        agent.add(new Text(await apiCasesBrazil.getCasesFromCountries(agent)))
      } else {
        agent.add(new Text(await apiCasesBrazil.getCasesFromStatesOrCities(agent)))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
