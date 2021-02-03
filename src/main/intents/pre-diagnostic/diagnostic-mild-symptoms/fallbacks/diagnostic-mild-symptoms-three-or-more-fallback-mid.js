
import { responseDiagnosticMildSymptomsThreeOrMoreFallbackMid } from '../../../../responses'
import { UtilsIntents } from '../../../utils/utils-intents'

export class DiagnosticMildSymptomsThreeOrMoreFallbackMid {
  static execute (agent) {
    // Recupera os dados do context
    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })

    UtilsIntents.setResponse(agent, responseDiagnosticMildSymptomsThreeOrMoreFallbackMid)
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsThreeOrMoreFallbackMid[0].title, responseDiagnosticMildSymptomsThreeOrMoreFallbackMid[0].suggestions)
  }
}
