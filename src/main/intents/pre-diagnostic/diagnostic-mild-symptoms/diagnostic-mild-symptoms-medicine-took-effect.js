import { responseDiagnosticMildSymptomsMedicineTookEffect } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticMildSymptomsMedicineTookEffect {
  static execute (agent) {
    const { groupOfRisk, fever, threeOrMoreSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, tookMedicine: true } })
    UtilsIntents.setResponse(agent, responseDiagnosticMildSymptomsMedicineTookEffect)
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsMedicineTookEffect[0].title, responseDiagnosticMildSymptomsMedicineTookEffect[0].suggestions)
  }
}
