import { Text, Suggestion } from 'dialogflow-fulfillment'

function incubacao (agent) {
  const mensagem = 'O "período de incubação" significa o tempo entre a contração do vírus e o início dos sintomas da doença.\n' +
    '\n' +
    '  Esse tempo varia de 1 a 14 dias, mas geralmente pode ocorrer em torno de 5 dias. \n' +
    '\n' +
    '⚠ No entanto, dados preliminares do Coronavírus sugerem que a transmissão possa ocorrer também mesmo sem o aparecimento de sinais e sintomas.'

  agent.add(new Text(mensagem))
  agent.add(new Text('Posso ajudar em algo mais? '))
  agent.add(new Suggestion('Sim'))
  agent.add(new Suggestion('Não, era só isso'))
}

export { incubacao }
