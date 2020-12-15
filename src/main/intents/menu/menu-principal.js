import { Suggestion } from 'dialogflow-fulfillment'

function menuPrincial (agent) {
  const mensagem = 'Você pode tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico. \n' +
    '\n' +
    'Sobre qual assunto você quer saber?'

  agent.add(new Suggestion({
    title: mensagem,
    reply: 'Prevenção'
  }))
  agent.add(new Suggestion({
    title: 'Contágio',
    reply: 'Contágio'
  }))
}

export { menuPrincial }