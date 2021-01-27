
import { responseDiagnosticBasicGroupOfRisk } from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasicGroupOfRisk {
  static execute (agent) {
    UtilsIntents.setSuggestion(agent, responseDiagnosticBasicGroupOfRisk[0].title, responseDiagnosticBasicGroupOfRisk[0].suggestions)
    UtilsIntents.setResponse(agent, responseDiagnosticBasicGroupOfRisk)
  }
}
