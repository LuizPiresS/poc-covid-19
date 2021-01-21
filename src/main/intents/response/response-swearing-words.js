import { Text } from 'dialogflow-fulfillment-helper'

export class ResponseSwearingWords {
  static async execute (agent) {
    const message = 'Quero ver falar assim entubado!!! 👿'

    agent.add(new Text(message))
  }
}
