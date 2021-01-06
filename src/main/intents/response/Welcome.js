import { MainMenu } from '../menu/MainMenu'
import { UtilsIntents } from '../utils/UtilsIntents'
export class Welcome {
  /**
   * Exibe mensagem de boas-vindas
   * @param agent
   * @returns {Promise<void>}
   */
  static async execute (agent) {
    const firstName = UtilsIntents.getName(agent).firstName || ''
    const lastName = UtilsIntents.getName(agent).lastName || ''
    // console.log(agent)
    let message = `Olá, ${firstName} ${lastName}! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus. 👩\n\nNeste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.\n\nE não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.`

    // Primeira visita
    if (!(await UtilsIntents.firsVisit(agent))) {
      await UtilsIntents.addUserID(agent)
      MainMenu.execute(agent, message)
      // segunda ou mais visita
    } else {
      message = `Olá novamente, ${firstName} ${lastName} ! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.️ 👩`
      MainMenu.execute(agent, message, true)
    }
  }
}
