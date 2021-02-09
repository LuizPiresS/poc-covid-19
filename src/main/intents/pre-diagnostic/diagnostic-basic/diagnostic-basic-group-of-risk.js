
import { responseDiagnosticBasicGroupOfRisk } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasicGroupOfRisk {
  static execute (agent) {
    // Recupera os dados do context
    const { groupOfRisk, fever, threeOrMoreSymptoms, tookEffect, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, tookEffect, severeSymptoms } })

    console.log('------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    UtilsIntents.setSuggestion(agent, responseDiagnosticBasicGroupOfRisk[0].title, responseDiagnosticBasicGroupOfRisk[0].suggestions)
    UtilsIntents.setResponse(agent, responseDiagnosticBasicGroupOfRisk)
  }
}
