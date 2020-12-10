import { Text } from 'dialogflow-fulfillment'

function saudacoesMensagemDespedida (agent) {
  const message = 'Se você precisar de mais informações sobre o Coronavírus, pode me chamar. \n \nE caso sentir que se enquadra em alguns dos sintomas, ligue para o Disque Saúde 136! ☎'

  const farewellMessage = `Tenha ${farewell()} ${agent.originalRequest.payload.data.from.first_name} ${agent.originalRequest.payload.data.from.last_name}. 👋`

  agent.add(new Text(message))
  agent.add(new Text(farewellMessage))

  function farewell () {
    const hour = new Date().getHours()
    let farewell = 'uma boa noite'

    if (hour >= 12 && hour < 18) {
      farewell = 'uma boa tarde'
    }
    if (hour >= 6 && hour < 12) {
      farewell = 'um bom dia'
    }
    return farewell
  }
}

export { saudacoesMensagemDespedida }
