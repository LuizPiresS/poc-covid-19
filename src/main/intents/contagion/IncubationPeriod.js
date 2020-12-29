import { Text, Suggestion } from 'dialogflow-fulfillment'

export class IncubationPeriod {
  static execute (agent) {
    const mensagem = 'O "período de incubação" significa o tempo entre a contração do vírus e o início dos sintomas da doença.\n' +
    '\n' +
    '  Esse tempo varia de 1 a 14 dias, mas geralmente pode ocorrer em torno de 5 dias. \n' +
    '\n' +
    '⚠ No entanto, dados preliminares do Coronavírus sugerem que a transmissão possa ocorrer também mesmo sem o aparecimento de sinais e sintomas.'

    agent.add(new Text(mensagem))
    agent.add(new Suggestion({
      title: 'Posso ajudar em algo mais? ',
      reply: 'sim'
    }))
    agent.add(new Suggestion({
      title: 'Não, era só isso',
      reply: 'Não, era só isso'
    }))
  }
}
