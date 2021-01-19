import { UtilsIntents } from '../utils/UtilsIntents'

export class CasesBrazilFallbackMiddle {
  static execute (agent) {
    const response = [{
      text: 'Ainda não consegui identificar o local selecionado. \n' +
        '\n' +
        'Você pode consultar casos de qualquer cidade ou estado no Brasil. Qual gostaria de consultar? 🔎\n' +
        '\n' +
        'Um exemplo de pesquisa. <Cidade Estado> Pelotas RS'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
