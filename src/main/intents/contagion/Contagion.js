import { Text, Suggestion } from 'dialogflow-fulfillment'

export class Contagion {
  static execute (agent) {
    const mensagem = 'Eu posso te informar sobre as principais \nformas de contágio e sobre o período de incubação por coronavírus. 🙂\n' +
    '\n' +
    'Mas fique a vontade para me perguntar qualquer outra questão relacionada ao assunto contágio. '
    agent.add(new Text(mensagem))
    agent.add(new Suggestion({
      title: 'Qual a sua dúvida?',
      reply: 'Formas de contágio'
    }))
    agent.add(new Suggestion({
      title: 'Período de incubação',
      reply: 'Período de incubação'
    }))
  }
}
