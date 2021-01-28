import { responseDiagnosticMildSymptomsThreeOrMore } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticMildSymptomsThreeOrMore {
  static execute (agent) {
    console.log('agent.query', agent.query)
    let threeOrMoreSymptoms

    if (agent.query === 'Nenhum') {
      threeOrMoreSymptoms = 0
    }
    if (agent.query <= 3) {
      threeOrMoreSymptoms = false
    }
    if (agent.query === 'Mais de três sintomas' || agent.query > 3) {
      threeOrMoreSymptoms = true
    }
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk: true, fever: true, threeOrMoreSymptoms } })
    console.log(agent.context.get('pre-diagnostic'))
    UtilsIntents.setResponse(agent, responseDiagnosticMildSymptomsThreeOrMore)
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsThreeOrMore[0].title, responseDiagnosticMildSymptomsThreeOrMore[0].suggestions)
  }
}
