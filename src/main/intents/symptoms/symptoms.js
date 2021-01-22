import { UtilsIntents } from '../utils/utils-intents'

export class Symptoms {
  static execute (agent) {
    const response = [{
      text: 'Para saber se o caso é de infecção por Coronavírus, você pode fazer um pré-diagnóstico comigo. 🙂'
    },
    {
      text: 'Quer consultar?'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
