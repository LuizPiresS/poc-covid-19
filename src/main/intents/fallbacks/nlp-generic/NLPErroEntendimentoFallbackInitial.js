import { UtilsIntents } from '../../utils/UtilsIntents'

export class NLPErroEntendimentoFallbackInitial {
  static execute (agent) {
    const response = [{
      text: 'Desculpe, não consegui entender.'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
