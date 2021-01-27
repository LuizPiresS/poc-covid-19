import { responseDiagnosticMildSymptomsMedicine } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticMildSymptomsMedicine {
  static execute (agent) {
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk: true, fever: true, threeOrMoreSymptoms: true, medicine: true } })
    console.log(agent.context.get('pre-diagnostic'))
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsMedicine[0].title, responseDiagnosticMildSymptomsMedicine[0].suggestions)
  }
}
