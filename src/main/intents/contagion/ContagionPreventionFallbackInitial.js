import { UtilsIntents } from '../utils/UtilsIntents'

export class ContagionPreventionFallbackInitial {
  static execute (agent) {
    const response = [{
      text: 'Desculpe, algumas perguntas\n' +
        'ainda não consigo te responder. 😓\n' +
        '\n' +
        'Me diga, qual a sua dúvida relacionada ao contagio?'
    }]
    UtilsIntents.setResponse(agent, response)
  }
}
