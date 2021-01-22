import { UtilsIntents } from '../../utils/utils-intents'

export class NlpGenericFallbackMiddle {
  static execute (agent) {
    const response = [{
      text: 'Eu ainda não entendi o que você disse. Vamos tentar novamente...'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
