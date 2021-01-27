import { UtilsIntents } from '../utils/utils-intents'

export class MainMenu {
  /**
   * Exibe o menu principal
   * @param agent
   * @param title
   * @param showMenu (define se o messageMenu será exibido ou não)
   */
  static execute (agent, title, showMenu = false) {
    const suggestions = ['Prevenção', 'Contágio', 'Casos no Brasil', 'Pré-diagnóstico']

    const response = [{
      text: 'Você pode tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico. \n' +
        '\n' +
        'Sobre qual assunto você quer saber?'
    }]

    if (!title) {
      title = '😁 Fico feliz em ajudar 😁'
    }
    UtilsIntents.setSuggestion(agent, title, suggestions)

    UtilsIntents.setResponse(agent, response)
  }
}
