import { Text, Suggestion } from 'dialogflow-fulfillment'

function contagio (agent) {
  const mensagem = 'Eu posso te informar sobre as principais \nformas de contágio e sobre o período de incubação por coronavírus. 🙂\n' +
    '\n' +
    'Mas fique a vontade para me perguntar qualquer outra questão relacionada ao assunto contágio. '
  agent.add(new Text(mensagem))
  agent.add(new Text('Qual a sua dúvida? '))
  agent.add(new Suggestion('Formas de contágio'))
  agent.add(new Suggestion('Período de incubação'))
}

export { contagio }
