import {
  responseRiskGroupA1,
  responseRiskGroupA2,
  responseRiskGroupA3,
  responseRiskGroupA4,
  responseRiskGroupA5,
  responseRiskGroupA6,
  responseRiskGroupA7,
  responseRiskGroupA8,
  responseRiskGroupA9,
  responseRiskGroupA10,
  responseRiskGroupA11,
  responseRiskGroupA12,
  responseOutsideRiskGroupA1,
  responseOutsideRiskGroupA2,
  responseOutsideRiskGroupA3,
  responseOutsideRiskGroupA4,
  responseOutsideRiskGroupA5,
  responseOutsideRiskGroupA6,
  responseOutsideRiskGroupA7,
  responseOutsideRiskGroupA8,
  responseOutsideRiskGroupA9,
  responseOutsideRiskGroupA10,
  responseOutsideRiskGroupA11,
  responseOutsideRiskGroupA12
} from '../../../responses'
import { UtilsIntents } from '../../utils/utils-intents'

export class DiagnosticResult {
  static execute (agent) {
    agent.context.set({
      name: 'pre-diagnostic',
      lifespan: 1,
      parameters: {
        groupOfRisk: true,
        fever: true,
        threeOrMoreSymptoms: true,
        tookMedicine: true,
        takenEffect: true,
        severeSymptoms: true
      }
    })

    console.log('resultado do exame')
    const context = agent.context.get('pre-diagnostic').parameters

    /**
     * Dentro do grupo de risco
     */
    if (context.groupOfRisk && !context.fever && !context.threeOrMoreSymptoms && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA1)
    }

    if (context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 0 && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA2)
    }

    if (context.groupOfRisk && !context.fever && !context.threeOrMoreSymptoms && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA3)
    }

    if (context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA4)
    }

    if (context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA5)
    }

    if (context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA6)
    }

    if (context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 0 && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA7)
    }

    if (context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 0 && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA8)
    }

    if (context.groupOfRisk && context.fever && !context.threeOrMoreSymptoms && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA9)
    }

    if (context.groupOfRisk && context.fever && !context.threeOrMoreSymptoms && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA10)
    }

    if (context.groupOfRisk && context.fever && context.threeOrMoreSymptoms && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA11)
    }

    if (context.groupOfRisk && context.fever && context.threeOrMoreSymptoms && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA12)
    }

    /**
     * Fora do grupo de risco
     */
    if (!context.groupOfRisk && !context.fever && !context.threeOrMoreSymptoms && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA1)
    }

    if (!context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 0 && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA2)
    }

    if (!context.groupOfRisk && !context.threeOrMoreSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA3)
    }

    if (!context.groupOfRisk && !context.threeOrMoreSymptoms && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA4)
    }

    if (!context.groupOfRisk && context.threeOrMoreSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA5)
    }

    if (!context.groupOfRisk && context.threeOrMoreSymptoms && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA6)
    }

    if (!context.groupOfRisk && context.fever) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA7)
    }

    if (!context.groupOfRisk && context.fever && context.threeOrMoreSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA8)
    }

    if (!context.groupOfRisk && context.fever && !context.threeOrMoreSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA9)
    }

    if (!context.groupOfRisk && context.fever && !context.threeOrMoreSymptoms && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA10)
    }

    if (!context.groupOfRisk && context.fever && context.threeOrMoreSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA11)
    }

    if (!context.groupOfRisk && context.fever && context.threeOrMoreSymptoms && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA12)
    }
    console.log(agent.originalRequest.payload)
    // UtilsIntents.setSuggestion(agent, responseRiskGroupA12[0].title, responseDiagnosticSevereSymptoms[0].suggestions)
  }
}
