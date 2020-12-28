import User from '../../../database/models/user'

export class UtilsIntents {
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
