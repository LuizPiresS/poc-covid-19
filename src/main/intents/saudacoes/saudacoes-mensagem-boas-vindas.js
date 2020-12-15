import { Suggestion, Text } from 'dialogflow-fulfillment'

import User from '../../../database/models/user'

async function saudacoesMensagemBoasVindas (agent) {
  const userId = agent.originalRequest.payload.data.from.id

  let message = `Olá, ${agent.originalRequest.payload.data.from.first_name} ${agent.originalRequest.payload.data.from.last_name}! Sou a Doutora Silvia, uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus. 👩\n\n Neste canal, você poderá tirar dúvidas comigo sobre prevenção, contágio, casos no Brasil ou realizar um pré-diagnóstico, por exemplo.\n\n E não se preocupe, pois todos os dados que eu te contar são retirados de fontes seguras que você pode confiar.`

  try {
    if (await User.findOne({ userId })) {
      message = `Olá novamente, ${agent.originalRequest.payload.data.from.first_name} ${agent.originalRequest.payload.data.from.last_name} ! Sou uma assistente virtual treinada para tirar suas dúvidas relacionadas ao Coronavírus.️ 👩`
    } else {
      await User.create({ userId })
    }
  } catch (error) {
    console.log(error)
  }

  agent.add(new Text(message))
  // agent.add(new Text('Sobre qual assunto você quer saber?'))
  agent.add(new Suggestion({
    title: 'Sobre qual assunto você quer saber?',
    reply: 'Prevenção'
  }))
  // agent.add(new Suggestion('Prevenção'))
  agent.add(new Suggestion({
    title: 'Contágio',
    reply: 'Contágio'
  }))
  // agent.add(new Suggestion('Casos no Brasil'))
  // agent.add(new Suggestion('Outras dúvidas'))
}

export { saudacoesMensagemBoasVindas }
