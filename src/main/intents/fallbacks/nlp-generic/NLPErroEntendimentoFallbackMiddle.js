import { UtilsIntents } from '../../utils/UtilsIntents'

export class NLPErroEntendimentoFallbackMiddle {
  static execute (agent) {
    const response = [{
      text: 'Ainda não consegui identificar a sua dúvida.\n' +
        '\n' +
        '\n' +
        'Você pode me perguntar sobre\n' +
        'prevenção, contágio, casos no Brasil 😊'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
