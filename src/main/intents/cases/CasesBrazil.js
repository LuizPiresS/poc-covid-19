import { Text } from 'dialogflow-fulfillment'

import { APICasesBrazil } from '../utils/apis/APICasesBrazil'

export class CasesBrazil {
  static async execute (agent) {
    try {
      const country = agent.parameters.location.country

      const apiCasesBrazil = new APICasesBrazil()

      if (country) {
        agent.add(new Text(await apiCasesBrazil.getCasesFromCountries(agent)))
      } else {
        agent.add(new Text(await apiCasesBrazil.getCasesFromStatesOrCities(agent)))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
