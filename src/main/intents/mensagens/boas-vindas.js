import { Suggestion, Text } from 'dialogflow-fulfillment'

import User from '../../../database/models/user'

export class BoasVindas {
  /**
   * Executa a ação
   * @param agent
   * @returns {Promise<void>}
   */
  static async execute (agent) {
    const firstName = BoasVindas.getName(agent).firstName
    const lastName = BoasVindas.getName(agent).lastName

    let message = `Olá, ${firstName} ${lastName}! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus. 👩\n\nNeste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.\n\nE não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.`

    if (await BoasVindas.firsVisit(agent)) {
      message = `Olá novamente, ${firstName} ${lastName} ! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.️ 👩`
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

  /**
   * Pega o primeiro e o último nome do usuário vindo do telegram
   * @param agent
   * @returns {{firstName: (string|string), lastName: (string|string)}}
   */
  static getName (agent) {
    const firstName = agent.originalRequest.payload.data.from.first_name || ''
    const lastName = agent.originalRequest.payload.data.from.last_name || ''

    return {
      firstName,
      lastName
    }
  }

  /**
   * Verifica se é a primeira visita do usuário
   * @param agent
   * @returns {Promise<boolean>}
   */
  static async firsVisit (agent) {
    const userId = agent.originalRequest.payload.data.from.id
    try {
      return !!(await User.findOne({ userId }))
    } catch (error) {
      console.log(error)
    }
  }
}
