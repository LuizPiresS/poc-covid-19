import { Text } from 'dialogflow-fulfillment-helper'

import { APICasesBrazil } from '../../external/apis/APICasesBrazil'
import { AnythingElse } from '../response/AnythingElse'

export class CasesInBrazilByStates {
  static async execute (agent) {
    try {
      const apiCasesBrazil = new APICasesBrazil()
      agent.add(new Text(await apiCasesBrazil.getCasesByStates(agent)))
      AnythingElse.helpMenu(agent)
    } catch (error) {
      console.log(error)
    }
  }
}
