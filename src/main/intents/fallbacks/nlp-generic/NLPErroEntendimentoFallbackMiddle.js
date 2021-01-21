import { UtilsIntents } from '../../utils/UtilsIntents'

export class NLPErroEntendimentoFallbackMiddle {
  static execute (agent) {
    const response = [{
      text: 'Eu ainda não entendi o que você disse. Vamos tentar novamente...'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
