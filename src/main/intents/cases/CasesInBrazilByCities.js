
import { Text } from 'dialogflow-fulfillment-helper'

import { APICasesBrazil } from '../../external/apis/APICasesBrazil'
import { AnythingElse } from '../response/AnythingElse'

export class CasesInBrazilByCities {
  static async execute (agent) {
    try {
      const apiCasesBrazil = new APICasesBrazil()
      agent.add(new Text(await apiCasesBrazil.getCasesByCities(agent.parameters.cities, agent.parameters.states)))
      AnythingElse.helpMenu(agent)
    } catch (error) {
      console.log(error)
    }
  }
}
