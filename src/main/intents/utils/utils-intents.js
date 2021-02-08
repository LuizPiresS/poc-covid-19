
import axios from 'axios'
import config from 'config'
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
      UtilsIntents.logChatbaseMessagesAgent(agent, suggestions.title).then(r => console.log(r, 'log agent ----------------')).catch(err => console.log(err))

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
        UtilsIntents.logChatbaseMessagesAgent(agent, response.text).then(r => console.log(r, 'log agent ----------------')).catch(error => console.log(error))
      }
    })
  }

  static findArray (response, title) {
    return response.find(element => element[`${title}`])[`${title}`]
  }

  static async logChatbaseMessagesUsers (agent, intent) {
    const tokenAPIChatbase = config.get('App.Auth.tokenAPIChatbase')
    console.log('------- Enviou o log')
    const dataMessage =
      {
        api_key: tokenAPIChatbase,
        type: 'user',
        platform: 'Telegram',
        message: agent.query,
        intent: intent,
        version: '1.0',
        user_id: 'user-00'

      }
    console.log('------- Enviou o log', dataMessage)

    return await axios.post('https://chatbase.com/api/message', dataMessage)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
        if (err.response.status === 500 || err.response.status === 400) {
          return {
            statusCode: 500
          }
        }
      })
  }

  static async logChatbaseMessagesAgent (agent, botMessage) {
    const tokenAPIChatbase = config.get('App.Auth.tokenAPIChatbase')

    const dataMessage =
      {
        api_key: tokenAPIChatbase,
        type: 'agent',
        platform: 'Telegram',
        message: botMessage,
        version: '1.0',
        user_id: 'user-01'
      }
    return await axios.post('https://chatbase.com/api/message', dataMessage)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
        if (err.response.status === 500 || err.response.status === 400) {
          return {
            statusCode: 500
          }
        }
      })
  }
}
