import { Suggestion, Text } from 'dialogflow-fulfillment-helper'

import User from '../../../database/models/user'

export class UtilsIntents {
  /**
   * Pega o primeiro e o último nome do usuário vindo do telegram
   * @param agent
   * @returns {{firstName: (string|string), lastName: (string|string)}}
   */
  static getName (agent) {
    const firstName = agent.first_name
    const lastName = agent.last_name

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
    let userId
    if (agent.source === 'FACEBOOK') {
      userId = agent.originalRequest.payload.data.sender.id
    } else {
      userId = agent.originalRequest.payload.data.from.id
    }
    try {
      return !!(await User.findOne({ userId }))
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Adiciona a id do usuário vinda do Telegram no database
   * @param agent
   * @returns {Promise<void>}
   */
  static async addUserID (agent) {
    let userId
    if (agent.source === 'FACEBOOK') {
      userId = agent.originalRequest.payload.data.sender.id
    } else {
      userId = agent.originalRequest.payload.data.from.id
    }
    try {
      await User.create({ userId })
    } catch (error) {
      console.log(error)
    }
  }

  /**
   *
   * @param agent
   * @param title
   * @param suggestions
   */
  static setSuggestion (agent, title, suggestions) {
    const platform = agent.source

    if (platform != null) {
      const currentSuggestions = new Suggestion({
        title: title,
        reply: suggestions[0],
        platform: platform
      })

      for (let index = 1; index < suggestions.length; index++) {
        currentSuggestions.addReply_(suggestions[index])
      }

      agent.add(currentSuggestions)
    }
  }

  /**
   *
   * @param agent
   * @param responses
   */
  static setResponse (agent, responses) {
    const platform = agent.source

    // eslint-disable-next-line array-callback-return
    responses.map((response) => {
      if (platform === 'ACTIONS_ON_GOOGLE') {
        const ssmlText = new Text(response.text)
        ssmlText.setSsml(response.ssml)
        agent.add(ssmlText)
      } else {
        agent.add(response.text)
      }
    })
  }

  static findArray (response, title) {
    return response.find(element => element[`${title}`])[`${title}`]
  }
}
