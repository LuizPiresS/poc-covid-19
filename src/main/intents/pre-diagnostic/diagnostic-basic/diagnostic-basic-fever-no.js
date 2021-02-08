export class DiagnosticBasicFeverNo {
  static execute (agent) {
    const { groupOfRisk, threeOrMoreSymptoms, severeSymptoms } = agent.context.get('pre-diagnostic').parameters
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever: false, threeOrMoreSymptoms, severeSymptoms } })

    console.log('fever no------------------', agent.context.get('pre-diagnostic').parameters, '------------------ no')
    agent.setFollowupEvent('pre-diagnostic-mild-symptoms-event')
  }
}