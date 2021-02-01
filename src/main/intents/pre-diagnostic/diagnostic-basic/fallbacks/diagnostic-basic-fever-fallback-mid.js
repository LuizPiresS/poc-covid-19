
import { responseDiagnosticFeverFallbackMid } from '../../../../responses'
import { UtilsIntents } from '../../../utils/utils-intents'

export class DiagnosticBasicFeverFallbackMid {
  static execute (agent) {
    // Recupera os dados do context
    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })

    UtilsIntents.setResponse(agent, responseDiagnosticFeverFallbackMid)
    UtilsIntents.setSuggestion(agent, responseDiagnosticFeverFallbackMid[0].title, responseDiagnosticFeverFallbackMid[0].suggestions)
  }
}
