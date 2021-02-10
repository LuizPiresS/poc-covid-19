import {
  responseDiagnosticMildSymptomsLessThree,
  responseDiagnosticMildSymptomsThreeOrMore
} from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class PreDiagnosticMildSymptomsThreeOrMore {
  static execute (agent) {
    let threeOrMoreSymptoms
    let response

    const agentQuery = agent.query
    const numberSymptomsQuery = agentQuery.replace(/([^\d])+/gim, '')
    const numberSymptoms = agent.parameters.mild_symptoms.length

    console.log('--------------------> ', numberSymptoms)

    if (numberSymptomsQuery <= 3 || agent.parameters.numbers <= 3 || numberSymptoms <= 3) {
      threeOrMoreSymptoms = 'poucos'
      response = responseDiagnosticMildSymptomsLessThree
    }
    if (agentQuery === 'Mais de três sintomas' || numberSymptomsQuery > 3 || agent.parameters.numbers > 3 || numberSymptoms > 3) {
      threeOrMoreSymptoms = 'muitos'
      response = responseDiagnosticMildSymptomsThreeOrMore
    }

    if (agentQuery === 'Nenhum' || agentQuery === 0 || agent.parameters.numbers === 0 || numberSymptoms === 0) {
      threeOrMoreSymptoms = 'nenhum'

      const { groupOfRisk, fever, severeSymptoms, tookEffect } = agent.context.get('pre-diagnostic').parameters
      agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms, tookEffect } })
      agent.setFollowupEvent('pre-diagnostic-severe-symptoms-event')
    }

    const { groupOfRisk, fever, severeSymptoms, tookEffect } = agent.context.get('pre-diagnostic').parameters

    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms, tookEffect } })
    console.log('three or more------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    UtilsIntents.setResponse(agent, response)
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsThreeOrMore[0].title, responseDiagnosticMildSymptomsThreeOrMore[0].suggestions)
  }
}
//
