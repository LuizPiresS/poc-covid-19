
import { responseDiagnosticFever } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasicFeverYes {
  static execute (agent) {
    const { groupOfRisk, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever: true, threeOrMoreSymptoms, severeSymptoms } })
    UtilsIntents.setSuggestion(agent, responseDiagnosticFever[0].title, responseDiagnosticFever[0].suggestions)
  }
}
