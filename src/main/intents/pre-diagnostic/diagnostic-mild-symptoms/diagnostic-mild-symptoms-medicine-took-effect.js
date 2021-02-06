export class DiagnosticMildSymptomsMedicineTookEffect {
  static execute (agent) {
    const { groupOfRisk, fever, threeOrMoreSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, tookMedicine: true } })

    console.log('Took effect ------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    agent.setFollowupEvent('pre-diagnostic-severe-symptoms-event')
  }
}
