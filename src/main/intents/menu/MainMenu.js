import { UtilsIntents } from '../utils/UtilsIntents'

export class MainMenu {
  /**
   * Exibe o menu principal
   * @param agent
   * @param title
   * @param showMenu (define se o messageMenu será exibido ou não)
   */
  static execute (agent, title, showMenu = false) {
    const suggestions = ['Prevenção', 'Contágio', 'Casos no Brasil']

    const response = [{
      text: 'Você pode tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil\n' +
        '\n' +
        'Sobre qual assunto você quer saber? \n\n'
    }]

    if (!title) {
      title = '😁 Fico feliz em ajudar 😁'
    }
    UtilsIntents.setSuggestion(agent, title, suggestions)

    UtilsIntents.setResponse(agent, response)
  }
}
