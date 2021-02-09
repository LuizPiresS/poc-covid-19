export class DiagnosticBasicGroupOfRiskNo {
  static execute (agent) {
    // Recupera os dados do context
    const { fever, threeOrMoreSymptoms, tookEffect, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk: false, fever, threeOrMoreSymptoms, tookEffect, severeSymptoms } })

    console.log('------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    agent.setFollowupEvent('diagnostic-basic-fever-event')
  }
}
