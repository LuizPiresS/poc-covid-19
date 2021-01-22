import { UtilsIntents } from '../../utils/utils-intents'

export class ContagionPreventionFallbackInitial {
  static execute (agent) {
    const response = [{
      text: 'Desculpe, algumas perguntas ainda não consigo te responder. 😓'
    },
    {
      text: 'Me diga, qual a sua dúvida relacionada ao Coronavírus?'
    }]

    UtilsIntents.setResponse(agent, response)
  }
}
