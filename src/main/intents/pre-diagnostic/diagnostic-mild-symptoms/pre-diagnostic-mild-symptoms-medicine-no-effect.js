export class PreDiagnosticMildSymptomsMedicineNoEffect {
  static execute (agent) {
    const { groupOfRisk, fever, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, tookEffect: false, severeSymptoms } })

    console.log('Took no effect ------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    agent.setFollowupEvent('pre-diagnostic-severe-symptoms-event')
  }
}
