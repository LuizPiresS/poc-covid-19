
import { responseDiagnosticBasicGroupOfRiskNoInitial } from '../../../../responses'
import { UtilsIntents } from '../../../utils/utils-intents'

export class DiagnosticBasicGroupOfRiskFallbackInitial {
  static execute (agent) {
    // Recupera os dados do context
    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })

    UtilsIntents.setResponse(agent, responseDiagnosticBasicGroupOfRiskNoInitial)
    UtilsIntents.setSuggestion(agent, responseDiagnosticBasicGroupOfRiskNoInitial[0].title, responseDiagnosticBasicGroupOfRiskNoInitial[0].suggestions)
  }
}
