import { responseDiagnosticSevereSymptoms } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticSevereSymptoms {
  static execute (agent) {
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk: true, fever: true, threeOrMoreSymptoms: true } })
    console.log(agent.context.get('pre-diagnostic'))
    UtilsIntents.setResponse(agent, responseDiagnosticSevereSymptoms)
    UtilsIntents.setSuggestion(agent, responseDiagnosticSevereSymptoms[0].title, responseDiagnosticSevereSymptoms[0].suggestions)
  }
}
