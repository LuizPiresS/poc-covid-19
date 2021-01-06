import { Text, Suggestion } from 'dialogflow-fulfillment-helper'

export class ContagionForms {
  static execute (agent) {
    const mensagem = 'A transmissão do vírus acontece por via\n ' +
    'respiratória, através de gotículas que se\n ' +
    'espalham pelo ar quando uma pessoa que\n' +
    ' está infectada tosse ou espirra. 💦\n' +
    '\n\n' +
    'Também é possível se contaminar por\n' +
    ' contato pessoal com as secreções\n' +
    ' infectadas, como: gotículas de saliva;\n ' +
    'espirro; tosse; catarro; contato pessoal\n ' +
    'próximo, como toque ou aperto de mão; e\n ' +
    'o contato com roupas e objetos\n' +
    ' contaminados.'
    agent.add(new Text(mensagem))
    agent.add(new Text(''))
    agent.add(new Suggestion({
      title: 'Posso ajudar em algo mais? ',
      reply: 'sim'
    }))
    agent.add(new Suggestion({
      title: 'Não ',
      reply: 'Não'
    }))
  }
}
