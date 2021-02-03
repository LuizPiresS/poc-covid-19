
import { responseDiagnosticMildSymptomsThreeOrMoreFallbackInitial } from '../../../../responses'
import { UtilsIntents } from '../../../utils/utils-intents'

export class DiagnosticMildSymptomsThreeOrMoreFallbackInitial {
  static execute (agent) {
    // Recupera os dados do context
    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })

    UtilsIntents.setResponse(agent, responseDiagnosticMildSymptomsThreeOrMoreFallbackInitial)
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsThreeOrMoreFallbackInitial[0].title, responseDiagnosticMildSymptomsThreeOrMoreFallbackInitial[0].suggestions)
  }
}
