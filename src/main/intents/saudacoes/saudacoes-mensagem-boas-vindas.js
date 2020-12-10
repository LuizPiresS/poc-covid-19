import { Text } from 'dialogflow-fulfillment'

function saudacoesMensagemBoasVindas (agent, body) {
  const message = `Olá, ${agent.originalRequest.payload.data.from.first_name} ${agent.originalRequest.payload.data.from.last_name}! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus. 👩\n\n Neste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.\n\n E não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.`
  agent.add(new Text(message))
  agent.add(new Text('message'))

  console.log(agent)
  agent.requestSource = agent.TELEGRAM
}

export { saudacoesMensagemBoasVindas }
