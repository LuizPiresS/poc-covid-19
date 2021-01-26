
import { responseDiagnosticFever } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasicFever {
  static execute (agent) {
    agent.context.set({ name: 'symptoms', lifespan: 1, parameters: { groupOfRisk: true } })
    UtilsIntents.setSuggestion(agent, responseDiagnosticFever[0].title, responseDiagnosticFever[0].suggestions)
    UtilsIntents.setResponse(agent, responseDiagnosticFever)
  }
}
