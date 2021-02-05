export class DiagnosticSevereSymptomsNo {
  static execute (agent) {
    const { groupOfRisk, fever, threeOrMoreSymptoms } = agent.context.get('pre-diagnostic').parameters

    agent.context.set({
      name: 'pre-diagnostic',
      lifespan: 1,
      parameters: {
        groupOfRisk,
        fever,
        threeOrMoreSymptoms,
        severeSymptoms: false
      }
    })

    console.log('------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    agent.setFollowupEvent('pre-diagnostic-result-event')
  }
}
