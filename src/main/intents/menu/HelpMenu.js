import { Suggestion } from 'dialogflow-fulfillment-helper'

export class HelpMenu {
  static helpMenu (agent) {
    agent.add(new Suggestion({
      title: 'Posso ajudar em algo mais?',
      reply: 'Sim',
      platform: agent.source
    }))
    console.log(agent.source)
    agent.add(new Suggestion({
      title: 'Não,era só isso',
      reply: 'Não,era só isso',
      platform: agent.source

    }))
  }
}
