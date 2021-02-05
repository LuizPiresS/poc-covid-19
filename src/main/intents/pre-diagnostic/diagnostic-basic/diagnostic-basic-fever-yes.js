export class DiagnosticBasicFeverYes {
  static execute (agent) {
    const { groupOfRisk, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever: true, threeOrMoreSymptoms, severeSymptoms } })

    console.log('yes------------------', agent.context.get('pre-diagnostic').parameters, '------------------ teve febre')
    agent.setFollowupEvent('diagnostic-mild-symptoms-event')
  }
}
