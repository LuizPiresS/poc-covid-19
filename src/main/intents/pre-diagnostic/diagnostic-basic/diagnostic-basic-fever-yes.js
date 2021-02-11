export class DiagnosticBasicFeverYes {
  static execute (agent) {
    const { groupOfRisk, threeOrMoreSymptoms, tookEffect, severeSymptoms } = agent.context.get('pre-diagnostic').parameters

    let fever = true
    if (agent.context.get('fever-yes').parameters.number < 37.8) {
      fever = false
    }
    agent.context.set({ name: 'pre-diagnostic', lifespan: 1, parameters: { groupOfRisk, fever, threeOrMoreSymptoms, tookEffect, severeSymptoms } })

    console.log('teve febre ------------------', agent.context.get('fever-yes').parameters, '------------------ teve febre')
    agent.setFollowupEvent('pre-diagnostic-mild-symptoms-event')
  }
}
