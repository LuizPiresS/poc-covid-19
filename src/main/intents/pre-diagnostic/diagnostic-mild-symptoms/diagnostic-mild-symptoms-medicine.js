import { responseDiagnosticMildSymptomsMedicine } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticMildSymptomsMedicine {
  static execute (agent) {
    const { groupOfRisk, fever, threeOrMoreSymptoms } = agent.context.get('pre-diagnostic').parameters

    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, tookMedicine: true } })
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsMedicine[0].title, responseDiagnosticMildSymptomsMedicine[0].suggestions)
  }
}
