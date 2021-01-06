import { Text } from 'dialogflow-fulfillment-helper'

import { APICasesBrazil } from '../../external/apis/APICasesBrazil'
import { HelpMenu } from '../menu/HelpMenu'

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
