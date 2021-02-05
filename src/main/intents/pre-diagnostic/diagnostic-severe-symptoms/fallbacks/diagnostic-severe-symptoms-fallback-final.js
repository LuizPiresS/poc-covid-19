
import { responseDiagnosticSevereSymptomsFallbackFinal } from '../../../../responses'
import { UtilsIntents } from '../../../utils/utils-intents'

export class DiagnosticSevereSymptomsFallbackFinal {
  static execute (agent) {
    // Recupera os dados do context
    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })

    UtilsIntents.setResponse(agent, responseDiagnosticSevereSymptomsFallbackFinal)
  }
}
