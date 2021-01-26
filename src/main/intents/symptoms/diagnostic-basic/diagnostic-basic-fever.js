
import { responseDiagnosticFever } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasicFever {
  static execute (agent) {
    UtilsIntents.setSuggestion(agent, responseDiagnosticFever[0].title, responseDiagnosticFever[0].suggestions)
    UtilsIntents.setResponse(agent, responseDiagnosticFever)
  }
}
