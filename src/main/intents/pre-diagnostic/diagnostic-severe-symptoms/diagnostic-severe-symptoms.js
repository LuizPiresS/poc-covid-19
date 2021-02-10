import { responseDiagnosticMildSymptomsNone, responseDiagnosticSevereSymptoms } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticSevereSymptoms {
  static execute (agent) {
    const { groupOfRisk, fever, threeOrMoreSymptoms, tookEffect, severeSymptoms } = agent.context.get('pre-diagnostic').parameters

    agent.context.set({
      name: 'pre-diagnostic',
      lifespan: 1,
      parameters: {
        groupOfRisk,
        fever,
        threeOrMoreSymptoms,
        tookEffect,
        severeSymptoms
      }
    })

    console.log('Severe symptoms ------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    if (threeOrMoreSymptoms === 'nenhum') {
      UtilsIntents.setResponse(agent, responseDiagnosticMildSymptomsNone)
    }
    UtilsIntents.setResponse(agent, responseDiagnosticSevereSymptoms)
    UtilsIntents.setSuggestion(agent, responseDiagnosticSevereSymptoms[0].title, responseDiagnosticSevereSymptoms[0].suggestions)
  }
}
