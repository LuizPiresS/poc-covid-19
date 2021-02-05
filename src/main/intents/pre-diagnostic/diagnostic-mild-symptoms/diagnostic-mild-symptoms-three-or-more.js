import { responseDiagnosticMildSymptomsLessThree, responseDiagnosticMildSymptomsThreeOrMore } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticMildSymptomsThreeOrMore {
  static execute (agent) {
    let threeOrMoreSymptoms
    let response

    const agentQuery = agent.query
    const numberSymptoms = agentQuery.replace(/([^\d])+/gim, '')

    if (numberSymptoms <= 3) {
      threeOrMoreSymptoms = 'poucos'
      response = responseDiagnosticMildSymptomsLessThree
    }
    if (agentQuery === 'Mais de três sintomas' || numberSymptoms > 3) {
      threeOrMoreSymptoms = 'muitos'
      response = responseDiagnosticMildSymptomsThreeOrMore
    }

    if (agentQuery === 'Nenhum') {
      threeOrMoreSymptoms = 'nenhum'
    }

    const { groupOfRisk, fever, severeSymptoms } = agent.context.get('pre-diagnostic').parameters

    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })
    console.log('------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    UtilsIntents.setResponse(agent, response)
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsThreeOrMore[0].title, responseDiagnosticMildSymptomsThreeOrMore[0].suggestions)
  }
}
