import {
  responseDiagnosticMildSymptomsLessThree,
  responseDiagnosticMildSymptomsNone,
  responseDiagnosticMildSymptomsThreeOrMore
} from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class PreDiagnosticMildSymptomsThreeOrMore {
  static execute (agent) {
    let threeOrMoreSymptoms
    let response

    console.log('--------------------> ', agent.parameters.numbers)
    const agentQuery = agent.query
    const numberSymptoms = agentQuery.replace(/([^\d])+/gim, '')

    if (numberSymptoms <= 3 || agent.parameters.numbers <= 3) {
      threeOrMoreSymptoms = 'poucos'
      response = responseDiagnosticMildSymptomsLessThree
    }
    if (agentQuery === 'Mais de três sintomas' || numberSymptoms > 3 || agent.parameters.numbers > 3) {
      threeOrMoreSymptoms = 'muitos'
      response = responseDiagnosticMildSymptomsThreeOrMore
    }

    if (agentQuery === 'Nenhum' || agentQuery === 0 || agent.parameters.numbers === 0) {
      threeOrMoreSymptoms = 'nenhum'
      response = responseDiagnosticMildSymptomsNone
    }

    const { groupOfRisk, fever, severeSymptoms, tookEffect } = agent.context.get('pre-diagnostic').parameters

    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms, tookEffect } })
    console.log('three or more------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    UtilsIntents.setResponse(agent, response)
    if (agentQuery !== 'Nenhum') {
      UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsThreeOrMore[0].title, responseDiagnosticMildSymptomsThreeOrMore[0].suggestions)
    }
  }
}
// pre-diagnostic-no
// symptoms-followup diagnostic-basic pre-diagnostic-followup pre-diagnostic-no-context
