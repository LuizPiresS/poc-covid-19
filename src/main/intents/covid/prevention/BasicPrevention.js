import { Text, Suggestion } from 'dialogflow-fulfillment'

export class BasicPrevention {
  /**
   * Executa intent de prevenção básica
   * @param agent
   */
  static execute (agent) {
    const mensagem = 'Vou citar alguns cuidados básicos que reduzem o risco geral de contrair ou transmitir infecções respiratórias agudas, incluindo o coronavírus: \n' +
    '\n' +
    '🖐 Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou use álcool em gel 70%;\n' +
    '\n' +
    '🤧 Ao tossir ou espirrar, cubra o nariz e boca com lenço ou com o braço. Não use as mãos;\n' +
    '\n' +
    '👀 Evite tocar nos olhos, nariz e boca com as mãos não lavadas;\n' +
    '\n' +
    '📱 Não compartilhe objetos pessoais;\n' +
    '\n' +
    '🏠 Mantenha os ambientes bem ventilados; \n' +
    '\n' +
    '👋 Tenha um comportamento amigável mas sem o contato físico, ou seja, sem apertos do mão, beijos e abraços;\n' +
    '\n' +
    '👥 Evite aglomerações se estiver doente;\n' +
    '\n' +
    '😷 Quando precisar sair de sua residência, sempre utilize máscaras caseiras feitas de tecido.'

    agent.add(new Text(mensagem))
    agent.add(new Text('Você também pode assistir o video\n informativo do Ministério da Saúde:\n \n https://www.youtube.com/watch?v=cvdskDhw-Ps \n\n Posso ajudar em algo mais?'))

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
}
