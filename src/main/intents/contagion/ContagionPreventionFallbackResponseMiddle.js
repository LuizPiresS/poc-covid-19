import { UtilsIntents } from '../utils/UtilsIntents'

export class ContagionPreventionFallbackResponseMiddle {
  static execute (agent) {
    const response = [{
      text: 'Ainda não consegui identificar a\n' +
        'sua dúvida.\n' +
        '\n' +
        'Você pode me perguntar sobre\n' +
        'prevenção, contágio, casos no\n' +
        'Brasil 😊\n' +
        '\n' +
        'Me conta, qual a sua dúvida?'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
