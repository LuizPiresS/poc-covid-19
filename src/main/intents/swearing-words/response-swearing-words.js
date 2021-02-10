import { Text } from 'dialogflow-fulfillment-helper'

export class ResponseSwearingWords {
  static async execute (agent) {
    const message = 'Não seja mal educado!!!'

    agent.add(new Text(message))
  }
}
