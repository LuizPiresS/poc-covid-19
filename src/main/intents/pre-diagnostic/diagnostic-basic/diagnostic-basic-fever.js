
import { responseDiagnosticFever, responseDiagnosticBasicGroupOfRiskYes, responseDiagnosticBasicGroupOfRiskNo } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasicFever {
  static async execute (agent) {
    await UtilsIntents.logChatbaseMessagesUsers(agent)

    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters

    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })

    if (groupOfRisk) {
      UtilsIntents.setResponse(agent, responseDiagnosticBasicGroupOfRiskYes)
    } else {
      UtilsIntents.setResponse(agent, responseDiagnosticBasicGroupOfRiskNo)
    }
    console.log('basic fever ------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    UtilsIntents.setSuggestion(agent, responseDiagnosticFever[0].title, responseDiagnosticFever[0].suggestions)
  }
}
