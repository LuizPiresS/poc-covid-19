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
}
