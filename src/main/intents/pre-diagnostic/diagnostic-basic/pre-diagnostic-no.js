import { responsePreDiagnosticNo } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class PreDiagnosticNo {
  static execute (agent) {
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk: null, fever: null, threeOrMoreSymptoms: null, severeSymptoms: null } })

    UtilsIntents.setResponse(agent, responsePreDiagnosticNo)
    UtilsIntents.setSuggestion(agent, responsePreDiagnosticNo[0].title, responsePreDiagnosticNo[0].suggestions)
  }
}
