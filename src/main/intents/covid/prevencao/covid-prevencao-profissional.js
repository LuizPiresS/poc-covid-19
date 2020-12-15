import { Text, Suggestion } from 'dialogflow-fulfillment'

function covidPrevencaoProfissional (agent) {
  const mensagem = 'Os profissionais de saúde devem utilizar as medidas de precaução padrão estabelecidas. 👍\n' +
    '\n' +
    'Ao prestar serviços que atendam casos suspeitos do vírus, é orientado que os profissionais tenham disponibilidade dos seguintes equipamentos de proteção individual:\n' +
    '\n' +
    '⚠ Para serviços em ambulatório:\n' +
    'O uso de máscara cirúrgica e luvas descartáveis.\n' +
    '\n' +
    '⚠ Para o atendimento em UPA, Pronto Socorro, UTI e Unidade semi-intensiva: É importante o uso de máscaras padrão N95 ou similar; luvas descartáveis; gorro; capote cirúrgico e óculos de proteção ou protetor facial.\n' +
    '\n' +
    '⚠ Além disso, para a realização de procedimentos que gerem aerossolização de secreções respiratórias como intubação, aspiração de vias aéreas ou indução de escarro, deve ser utilizado precaução por aerossóis, com uso de máscara N95.\n' +
    '😷'

  agent.add(new Text(mensagem))

  // TODO: Implementar o fluxo do sim para o menu iniciar
  agent.add(new Suggestion({
    title: 'Posso ajudar em algo mais?',
    reply: 'Sim'
  }))
  agent.add(new Suggestion({
    title: 'Não,era só isso',
    reply: 'Não,era só isso'
  }))
}

export { covidPrevencaoProfissional }
