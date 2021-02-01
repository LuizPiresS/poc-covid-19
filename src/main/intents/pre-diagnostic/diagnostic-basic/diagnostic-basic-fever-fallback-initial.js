
import { responseDiagnosticFeverFallbackInitial } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasicFeverFallbackInitial {
  static execute (agent) {
    // Recupera os dados do context
    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })

    UtilsIntents.setResponse(agent, responseDiagnosticFeverFallbackInitial)
    UtilsIntents.setSuggestion(agent, responseDiagnosticFeverFallbackInitial[0].title, responseDiagnosticFeverFallbackInitial[0].suggestions)
  }
}
