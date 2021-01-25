
import { responseDiagnosticBasicYes } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasicYes {
  static execute (agent) {
    UtilsIntents.setSuggestion(agent, responseDiagnosticBasicYes[0].title, responseDiagnosticBasicYes[0].suggestions)
    UtilsIntents.setResponse(agent, responseDiagnosticBasicYes)
  }
}
