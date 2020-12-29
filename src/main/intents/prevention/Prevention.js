import { Text, Suggestion } from 'dialogflow-fulfillment'

export class Prevention {
  static execute (agent) {
    const mensagem = 'Eu sei ótimas dicas de prevenções básica e do profissional da saúde. Mas fique a vontade para me perguntar qualquer outra questão relacionada ao assunto prevenção. 🙂'
    agent.add(new Text(mensagem))
    agent.add(new Suggestion({
      title: 'Qual a sua dúvida?',
      reply: 'Prevenção básica'
    }))
    agent.add(new Suggestion({
      title: 'Prevenção do profissional',
      reply: 'Prevenção do profissional'
    }))
  }
}
