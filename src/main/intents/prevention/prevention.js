import { Text, Suggestion } from 'dialogflow-fulfillment-helper'

export class Prevention {
  static execute (agent) {
    const mensagem = 'Eu sei ótimas dicas de prevenções' +
      'básica e do profissional da saúde.🙂\n\n'

    agent.add(new Text(mensagem))
    agent.add(new Suggestion({
      title: 'Qual a sua dúvida?\n\n',
      reply: 'Prevenção básica'
    }))
    agent.add(new Suggestion({
      title: 'Prevenção do profissional',
      reply: 'Prevenção do profissional'
    }))
  }
}
