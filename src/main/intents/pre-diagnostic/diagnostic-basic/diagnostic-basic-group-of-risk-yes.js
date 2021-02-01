
import { responseDiagnosticBasicGroupOfRiskYes } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasicGroupOfRiskYes {
  static execute (agent) {
    // Recupera os dados do context
    const { fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk: true, fever, threeOrMoreSymptoms, severeSymptoms } })

    UtilsIntents.setResponse(agent, responseDiagnosticBasicGroupOfRiskYes)
  }
}
