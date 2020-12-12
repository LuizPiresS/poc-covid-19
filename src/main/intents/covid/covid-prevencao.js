import { Text, Suggestion } from 'dialogflow-fulfillment'

function covidPrevencao (agent) {
  const mensagem = 'Eu sei ótimas dicas de prevenções básica e do profissional da saúde. Mas fique a vontade para me perguntar qualquer outra questão relacionada ao assunto prevenção. 🙂'
  agent.add(new Text(mensagem))
  agent.add(new Text('Qual a sua dúvida? '))
  agent.add(new Suggestion('Prevenção básica'))
  agent.add(new Suggestion('Prevenção do profissional'))
}

export { covidPrevencao }
