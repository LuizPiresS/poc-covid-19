import { UtilsIntents } from '../../utils/UtilsIntents'

export class ContagionPreventionFallbackResponseFinal {
  static execute (agent) {
    const response = [{
      text: 'Desculpe, não consegui identificar a sua dúvida. Vamos parar por aqui. 😓'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
