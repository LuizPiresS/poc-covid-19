import { responseDiagnosticBasic } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasic {
  static execute (agent) {
    UtilsIntents.setResponse(agent, responseDiagnosticBasic)
    UtilsIntents.setSuggestion(agent, responseDiagnosticBasic[0].title, responseDiagnosticBasic[0].suggestions)
  }
}
