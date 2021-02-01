
import { responseDiagnosticMildSymptomsFallbackMid } from '../../../../responses'
import { UtilsIntents } from '../../../utils/utils-intents'

export class DiagnosticMildSymptomsFallbackMid {
  static execute (agent) {
    // Recupera os dados do context
    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })

    UtilsIntents.setResponse(agent, responseDiagnosticMildSymptomsFallbackMid)
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsFallbackMid[0].title, responseDiagnosticMildSymptomsFallbackMid[0].suggestions)
  }
}
