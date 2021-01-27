import { responseDiagnosticMildSymptomsThreeOrMore } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticMildSymptomsThreeOrMore {
  static execute (agent) {
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk: true, fever: true, threeOrMoreSymptoms: true } })
    console.log(agent.context.get('pre-diagnostic'))
    UtilsIntents.setResponse(agent, responseDiagnosticMildSymptomsThreeOrMore)
    UtilsIntents.setSuggestion(agent, responseDiagnosticMildSymptomsThreeOrMore[0].title, responseDiagnosticMildSymptomsThreeOrMore[0].suggestions)
  }
}
