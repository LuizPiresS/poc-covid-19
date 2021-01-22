import { UtilsIntents } from '../../utils/utils-intents'

export class NlpGenericFallbackInitial {
  static execute (agent) {
    const response = [{
      text: 'Desculpe, não consegui entender.'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
