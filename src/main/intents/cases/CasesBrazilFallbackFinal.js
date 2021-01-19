import { AnythingElse } from '../response/AnythingElse'
import { UtilsIntents } from '../utils/UtilsIntents'

export class CasesBrazilFallbackFinal {
  static execute (agent) {
    const response = [{
      text: 'Desculpe, sigo sem conseguir identificar\n ' +
        'o local que você informou. 😓 '
    }]
    UtilsIntents.setResponse(agent, response)
    AnythingElse.helpMenu(agent)
  }
}
