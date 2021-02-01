
import { responseDiagnosticBasicGroupOfRiskNoFinal } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasicGroupOfRiskFallbackFinal {
  static execute (agent) {
    // Recupera os dados do context
    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })

    UtilsIntents.setResponse(agent, responseDiagnosticBasicGroupOfRiskNoFinal)
    // UtilsIntents.setSuggestion(agent, responseDiagnosticBasicGroupOfRiskNoFinal[0].title, responseDiagnosticBasicGroupOfRiskNoFinal[0].suggestions)
  }
}
