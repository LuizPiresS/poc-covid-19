import { responseDiagnosticBasic } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasic {
  static execute (agent) {
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk: null, fever: null, threeOrMoreSymptoms: null, severeSymptoms: null } })

    UtilsIntents.setResponse(agent, responseDiagnosticBasic)
    UtilsIntents.setSuggestion(agent, responseDiagnosticBasic[0].title, responseDiagnosticBasic[0].suggestions)
  }
}
