import { Suggestion, Text } from 'dialogflow-fulfillment-helper'

export class MainMenu {
  /**
   * Exibe o menu principal
   * @param agent
   * @param message
   * @param showMenu (define se o messageMenu será exibido ou não)
   */
  static execute (agent, message, showMenu = false) {
    const messageMenu = 'Você pode tirar dúvidas comigo sobre\n prevenção, contágio, casos no Brasil ou\n realizar um pré-diagnóstico.'
    agent.add(new Text(message || null))

    agent.add(new Suggestion({
      title: showMenu ? messageMenu : null,
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
    agent.add(new Text('Sobre qual assunto você quer saber?'))
  }
}
