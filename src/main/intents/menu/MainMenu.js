import { Suggestion, Text } from 'dialogflow-fulfillment'

export class MainMenu {
  /**
   * Exibe o menu principal
   * @param agent
   * @param message
   * @param menu (define se o messageMenu será exibido ou não)
   */
  static execute (agent, message, menu = false) {
    const messageMenu = 'Você pode tirar dúvidas comigo sobre\n prevenção, contágio, casos no Brasil ou\n realizar um pré-diagnóstico.'
    agent.add(new Text(message))
    if (menu) {
      agent.add(new Text(messageMenu))
    }
    agent.add(new Text('Sobre qual assunto você quer saber?'))
    agent.add(new Suggestion({
      title: ' ',
      reply: 'Prevenção'
    }))
    agent.add(new Suggestion({
      title: 'Contágio',
      reply: 'Contágio'
    }))
    agent.add(new Suggestion({
      title: 'Casos no Brasil',
      reply: 'Casos no Brasil'
    }))
  }
}
