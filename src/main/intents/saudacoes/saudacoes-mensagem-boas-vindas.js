import { Text } from 'dialogflow-fulfillment'

function saudacoesMensagemBoasVindas (agent) {
  const userExists = data.filter(userId => agent.originalRequest.payload.data.from.id === userId.id).length

  const menu = '| Prevenção | Contágio | Casos no Brasil | Casos no Brasil | Outras dúvidas |'
  let message = `Olá, ${agent.originalRequest.payload.data.from.first_name} ${agent.originalRequest.payload.data.from.last_name}! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus. 👩\n\n Neste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.\n\n E não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.`

  if (userExists === 0) {
    // data.push({ id: agent.originalRequest.payload.data.from.id })
    // cadastra o id do usuario no mongo
  } else {
    message = `Olá novamente, ${agent.originalRequest.payload.data.from.first_name} ${agent.originalRequest.payload.data.from.last_name} ! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.️ 👩`
  }

  agent.add(new Text(message))
  agent.add(new Text('Sobre qual assunto você quer saber?'))
  agent.add(menu)
}

export { saudacoesMensagemBoasVindas }
