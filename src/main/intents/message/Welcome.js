import { Suggestion, Text } from 'dialogflow-fulfillment'

import { UtilsIntents } from '../utils/Utils'

export class Welcome {
  /**
   * Exibe mensagem de boas-vindas
   * @param agent
   * @returns {Promise<void>}
   */
  static async execute (agent) {
    const name = UtilsIntents.getName(agent)

    let message = `Olá, ${name.firstName} ${name.lastName}! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus. 👩\n\nNeste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.\n\nE não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.`

    if (await UtilsIntents.firsVisit(agent)) {
      message = `Olá novamente, ${name.firstName} ${name.lastName} ! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.️ 👩`
    }

    agent.add(new Text(message))
    agent.add(new Suggestion({
      title: 'Sobre qual assunto você quer saber?',
      reply: 'Prevenção'
    }))
    agent.add(new Suggestion({
      title: 'Contágio',
      reply: 'Contágio'
    }))
  }
}
