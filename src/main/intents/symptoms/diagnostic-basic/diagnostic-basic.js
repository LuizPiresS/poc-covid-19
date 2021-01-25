import { responseDiagnosticBasic } from '../../../responses'
import { YesOrNo } from '../../menu/yes-or-no'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticBasic {
  static execute (agent) {
    UtilsIntents.setResponse(agent, responseDiagnosticBasic)
    YesOrNo.execute(agent, 'Vamos lá? 🙂')
  }
}
