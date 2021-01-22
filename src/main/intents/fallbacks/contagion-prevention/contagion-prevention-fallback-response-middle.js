import { UtilsIntents } from '../../utils/utils-intents'

export class ContagionPreventionFallbackResponseMiddle {
  static execute (agent) {
    const response = [{
      text: 'Ainda não consegui identificar a sua dúvida.\n' +
        '\n' +
        'Você pode me perguntar sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo. 😊'
    },
    {
      text: 'Me conta, qual a sua dúvida?'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
