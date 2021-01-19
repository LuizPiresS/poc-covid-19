import { UtilsIntents } from '../../utils/UtilsIntents'

export class NLPErroEntendimentoFallbackInitial {
  static execute (agent) {
    const response = [{
      text: 'Desculpe, algumas perguntas ainda não consigo te responder. 😓\n' +
        '\n' +
        'Me diga, qual a sua dúvida relacionada ao Coronavírus?'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}

// Ainda não consegui identificar a sua dúvida.\n' +
// '\n' +
// '\n' +
// 'Você pode me perguntar sobre\n' +
// 'prevenção, contágio, casos no Brasil\n' +
// 'ou realizar um\n' +
// 'pré-diagnóstico, por exemplo. 😊
