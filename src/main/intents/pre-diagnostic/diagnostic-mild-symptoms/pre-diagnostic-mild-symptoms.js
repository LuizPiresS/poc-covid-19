import { responseDiagnosticMildSymptoms } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class PreDiagnosticMildSymptoms {
  static execute (agent) {
    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })
    UtilsIntents.setResponse(agent, responseDiagnosticMildSymptoms)

    console.log('Mild Symptoms------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptoms[0].title, responseDiagnosticMildSymptoms[0].suggestions)
  }
}
