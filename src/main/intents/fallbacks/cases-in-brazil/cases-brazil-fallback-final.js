import { AnythingElse } from '../../menu/anything-else'
import { UtilsIntents } from '../../utils/utils-intents'

export class CasesBrazilFallbackFinal {
  static execute (agent) {
    const response = [{
      text: 'Desculpe, sigo sem conseguir identificar\n ' +
        'o local que você informou. 😓 '
    }]
    UtilsIntents.setResponse(agent, response)
    AnythingElse.execute(agent)
  }
}
