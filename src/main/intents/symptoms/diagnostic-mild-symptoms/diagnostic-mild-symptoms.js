import { responseDiagnosticMildSymptoms } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticMildSymptoms {
  static execute (agent) {
    agent.context.set({ name: 'symptoms', lifespan: 1, parameters: { groupOfRisk: true, fever: true } })
    console.log(agent.context.get('symptoms'))
    UtilsIntents.setResponse(agent, responseDiagnosticMildSymptoms)
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptoms[0].title, responseDiagnosticMildSymptoms[0].suggestions)
  }
}
