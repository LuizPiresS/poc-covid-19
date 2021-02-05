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
    console.log('------------------', agent.context.get('pre-diagnostic').parameters, '------------------')
    const context = agent.context.get('pre-diagnostic').parameters

    /**
     * Fora do grupo de risco
     */
    if (!context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'nenhum' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA1)
    }

    if (!context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'nenhum' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA2)
    }

    if (!context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'poucos' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA3)
    }

    if (!context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'poucos' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA4)
    }

    if (!context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'muitos' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA5)
    }

    if (!context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'muitos' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA6)
    }

    if (!context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'nenhum' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA7)
    }

    if (!context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'nenhum' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA8)
    }

    if (!context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'poucos' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA9)
    }

    if (!context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'poucos' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA10)
    }

    if (!context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'muitos' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA11)
    }

    if (!context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'muitos' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseOutsideRiskGroupA12)
    }

    /**
     * Dentro do grupo de risco
     */
    if (context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'poucos' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA1)
    }

    if (context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'nenhum' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA2)
    }

    if (context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'poucos' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA3)
    }

    if (context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'muitos' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA4)
    }

    if (context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'muitos' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA5)
    }

    if (context.groupOfRisk && !context.fever && context.threeOrMoreSymptoms === 'muitos' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA6)
    }

    if (context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'nenhum' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA7)
    }

    if (context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'nenhum' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA8)
    }

    if (context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'poucos' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA9)
    }

    if (context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'poucos' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA10)
    }

    if (context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'muitos' && !context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA11)
    }

    if (context.groupOfRisk && context.fever && context.threeOrMoreSymptoms === 'muitos' && context.severeSymptoms) {
      UtilsIntents.setResponse(agent, responseRiskGroupA12)
    }
  }
}
