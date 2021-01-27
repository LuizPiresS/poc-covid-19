import { responsePreDiagnostic } from '../../responses'
import { UtilsIntents } from '../utils/utils-intents'
export class PreDiagnostic {
  static execute (agent) {
    UtilsIntents.setResponse(agent, responsePreDiagnostic)
    UtilsIntents.setSuggestion(agent, responsePreDiagnostic[0].title, responsePreDiagnostic[0].suggestions)
  }
}
