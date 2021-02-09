export class PreDiagnosticMildSymptomsMedicineTookEffect {
  static execute (agent) {
    const { groupOfRisk, fever } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms: 'nenhum', tookEffect: true } })

    console.log('Took effect ------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    agent.setFollowupEvent('pre-diagnostic-severe-symptoms-event')
  }
}
