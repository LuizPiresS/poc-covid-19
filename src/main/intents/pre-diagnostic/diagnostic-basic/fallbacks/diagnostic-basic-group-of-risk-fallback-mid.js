
import { responseDiagnosticBasicGroupOfRiskNoMid } from '../../../../responses'
import { UtilsIntents } from '../../../utils/utils-intents'

export class DiagnosticBasicGroupOfRiskFallbackMid {
  static execute (agent) {
    // Recupera os dados do context
    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })

    UtilsIntents.setResponse(agent, responseDiagnosticBasicGroupOfRiskNoMid)
    UtilsIntents.setSuggestion(agent, responseDiagnosticBasicGroupOfRiskNoMid[0].title, responseDiagnosticBasicGroupOfRiskNoMid[0].suggestions)
  }
}
// diagnostic-basic-group-of-risk-no
// diagnostic-basic-group-of-risk-followup