export class DiagnosticMildSymptomsMedicineTookEffect {
  static execute (agent) {
    const { groupOfRisk, fever, threeOrMoreSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, tookMedicine: true } })

    console.log('------------------', agent.context.get('pre-diagnostic').parameters, '------------------')

    agent.setFollowupEvent('diagnostic-severe-symptoms-event')
  }
}
