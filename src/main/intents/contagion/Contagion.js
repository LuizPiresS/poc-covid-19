import { Text, Suggestion } from 'dialogflow-fulfillment-helper'

export class Contagion {
  static execute (agent) {
    agent.add(new Text('Eu posso te informar sobre as principais\n' +
      'formas de contágio e sobre o período de\n' +
      'incubação por coronavírus. 🙂'))
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
