import { Text } from 'dialogflow-fulfillment-helper'

import { Utils } from '../../utils/Utils'
import { UtilsIntents } from '../utils/utils-intents'

export class Farewell {
  /**
   * Exibe mensagem de despedida
   * @param agent
   * @returns {Promise<void>}
   */
  static async execute (agent) {
    const name = UtilsIntents.getName(agent)

    const message = 'Se você precisar de mais informações sobre o Coronavírus, pode me chamar.\n\n' +
      'E caso sentir que se enquadra em alguns dos sintomas, ligue para o Disque Saúde 136! ☎'
    const farewellMessage = `Tenha ${Utils.salutation()},  ${name.firstName} ${name.lastName}! 👋`

    agent.add(new Text(message))
    agent.add(new Text(farewellMessage))
  }
}
