import { UtilsIntents } from '../utils/UtilsIntents'

export class CasesBrazilFallbackInitial {
  static execute (agent) {
    const response = [{
      text: 'Desculpe, não consegui identificar o local \n' +
        'selecionado. 😕\n' +
        '\n' +
        'Qual local você quer consultar? 🔎'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
