import { Text } from 'dialogflow-fulfillment-helper'

import { HelpMenu } from '../menu/HelpMenu'
import { APICasesBrazil } from '../utils/apis/APICasesBrazil'

export class CasesInBrazilByStates {
  static async execute (agent) {
    try {
      const apiCasesBrazil = new APICasesBrazil()
      agent.add(new Text(await apiCasesBrazil.getCasesByStates(agent)))
      HelpMenu.helpMenu(agent)
    } catch (error) {
      console.log(error)
    }
  }
}
