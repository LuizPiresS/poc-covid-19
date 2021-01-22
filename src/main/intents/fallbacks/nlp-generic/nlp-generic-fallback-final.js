import { UtilsIntents } from '../../utils/utils-intents'

export class NlpGenericFallbackFinal {
  static execute (agent) {
    const response = [{
      text: 'Desculpe, realmente não consegui entender o que você disse. Vamos parar por aqui.\n' +
        '\n' +
        'Cuide-se, e não se esqueça: caso você se enquadre em alguns dos sintomas, ligue para o Disque saúde 136. ☎'
    },
    {
      text: 'Caso você precise de mais informações sobre o Coronavírus, pode me procurar! 👋'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
