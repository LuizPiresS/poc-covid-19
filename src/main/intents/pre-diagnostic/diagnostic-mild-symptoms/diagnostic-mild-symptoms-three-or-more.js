import { responseDiagnosticMildSymptomsLessThree, responseDiagnosticMildSymptomsThreeOrMore } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticMildSymptomsThreeOrMore {
  static execute (agent) {
    console.log('agent.query', agent.originalRequest.payload.data)
    let threeOrMoreSymptoms
    let response

    const agentQuery = agent.query
    const numberSymptoms = agentQuery.replace(/([^\d])+/gim, '')

    if (agentQuery === 'Nenhum') {
      threeOrMoreSymptoms = 0
    }
    if (numberSymptoms <= 3) {
      threeOrMoreSymptoms = false
      response = responseDiagnosticMildSymptomsLessThree
    }
    if (agentQuery === 'Mais de três sintomas' || numberSymptoms > 3) {
      threeOrMoreSymptoms = true
      response = responseDiagnosticMildSymptomsThreeOrMore
    }

    const { groupOfRisk, fever, severeSymptoms } = agent.context.get('pre-diagnostic').parameters

    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } })
    console.log(agent.context.get('pre-diagnostic'))
    UtilsIntents.setResponse(agent, response)
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsThreeOrMore[0].title, responseDiagnosticMildSymptomsThreeOrMore[0].suggestions)
  }
}
