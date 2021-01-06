import { Suggestion } from 'dialogflow-fulfillment-helper'

export class HelpMenu {
  static helpMenu (agent) {
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
