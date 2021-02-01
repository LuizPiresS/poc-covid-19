
import bodyParser from 'body-parser'
import { WebhookClient } from 'dialogflow-fulfillment-helper'
import express from 'express'
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime' // necessario para a compilação do projeto

import {
  Welcome,
  Farewell,
  Prevention,
  BasicPrevention,
  ProfessionalPrevention,
  Contagion,
  ContagionForms,
  IncubationPeriod,
  MainMenu,
  CasesInBrazil,
  CasesBrazilFallbackFinal,
  CasesInBrazilByCities,
  CasesInBrazilByStates,
  CasesBrazilFallbackInitial,
  CasesBrazilFallbackMiddle,
  ContagionPreventionFallbackInitial,
  ContagionPreventionFallbackResponseMiddle,
  ContagionPreventionFallbackResponseFinal,
  NlpGenericFallbackInitial,
  NlpGenericFallbackMiddle,
  NlpGenericFallbackFinal,
  ResponseSwearingWords,
  PreDiagnostic,
  DiagnosticBasic,
  PreDiagnosticNo,
  DiagnosticBasicGroupOfRisk,
  DiagnosticBasicGroupOfRiskYes,
  DiagnosticBasicGroupOfRiskNo,
  DiagnosticBasicGroupOfRiskFallbackInitial,
  DiagnosticBasicGroupOfRiskFallbackMid,
  DiagnosticBasicGroupOfRiskFallbackFinal,
  DiagnosticBasicFever,
  DiagnosticBasicFeverFallbackInitial,
  DiagnosticBasicFeverFallbackMid,
  DiagnosticBasicFeverFallbackFinal,
  DiagnosticMildSymptoms,
  DiagnosticMildSymptomsThreeOrMore,
  DiagnosticMildSymptomsMedicine,
  DiagnosticSevereSymptoms,
  DiagnosticResult

} from '../intents'

const app = express()
app
  .use(bodyParser.json())
  .post('/', (req, res) => {
    const agent = new WebhookClient({ request: req, response: res })
    const intentMap = new Map()
    intentMap.set('response-welcome', Welcome.execute)
    intentMap.set('response-farewell', Farewell.execute)
    intentMap.set('response-swearing-words', ResponseSwearingWords.execute)

    intentMap.set('nlp-erro-entendimento-fallback-initial', NlpGenericFallbackInitial.execute)
    intentMap.set('nlp-erro-entendimento-fallback-middle', NlpGenericFallbackMiddle.execute)
    intentMap.set('nlp-erro-entendimento-fallback-final', NlpGenericFallbackFinal.execute)

    intentMap.set('prevention', Prevention.execute)
    intentMap.set('prevention-basic-prevention', BasicPrevention.execute)
    intentMap.set('prevention-professional-prevention', ProfessionalPrevention.execute)

    intentMap.set('contagion', Contagion.execute)
    intentMap.set('contagion-forms', ContagionForms.execute)
    intentMap.set('contagion-incubation-period', IncubationPeriod.execute)

    intentMap.set('contagion-prevention-fallback-initial', ContagionPreventionFallbackInitial.execute)
    intentMap.set('contagion-prevention-fallback-middle', ContagionPreventionFallbackResponseMiddle.execute)
    intentMap.set('contagion-prevention-fallback-finall', ContagionPreventionFallbackResponseFinal.execute)

    intentMap.set('main-menu', MainMenu.execute)

    intentMap.set('cases-brazil', CasesInBrazil.execute)
    intentMap.set('cases-brazil-states', CasesInBrazilByStates.execute)
    intentMap.set('cases-brazil-cities', CasesInBrazilByCities.execute)

    intentMap.set('cases-brazil-fallback-initial', CasesBrazilFallbackInitial.execute)
    intentMap.set('cases-brazil-fallback-middle', CasesBrazilFallbackMiddle.execute)
    intentMap.set('fallback-cases-brazil-final', CasesBrazilFallbackFinal.execute)

    intentMap.set('pre-diagnostic', PreDiagnostic.execute)
    intentMap.set('diagnostic-basic', DiagnosticBasic.execute)
    intentMap.set('pre-diagnostic-no', PreDiagnosticNo.execute)

    intentMap.set('diagnostic-basic-group-of-risk', DiagnosticBasicGroupOfRisk.execute)
    intentMap.set('diagnostic-basic-group-of-risk-yes', DiagnosticBasicGroupOfRiskYes.execute)
    intentMap.set('diagnostic-basic-group-of-risk-no', DiagnosticBasicGroupOfRiskNo.execute)
    intentMap.set('diagnostic-basic-group-of-risk-fallback-initial', DiagnosticBasicGroupOfRiskFallbackInitial.execute)
    intentMap.set('diagnostic-basic-group-of-risk-fallback-mid', DiagnosticBasicGroupOfRiskFallbackMid.execute)
    intentMap.set('diagnostic-basic-group-of-risk-fallback-final', DiagnosticBasicGroupOfRiskFallbackFinal.execute)

    intentMap.set('diagnostic-basic-fever', DiagnosticBasicFever.execute)
    intentMap.set('diagnostic-basic-fever-fallback-initial', DiagnosticBasicFeverFallbackInitial.execute)
    intentMap.set('diagnostic-basic-fever-fallback-mid', DiagnosticBasicFeverFallbackMid.execute)
    intentMap.set('diagnostic-basic-fever-fallback-final', DiagnosticBasicFeverFallbackFinal.execute)

    intentMap.set('diagnostic-mild-symptoms', DiagnosticMildSymptoms.execute)
    intentMap.set('diagnostic-mild-symptoms-three-or-more', DiagnosticMildSymptomsThreeOrMore.execute)
    intentMap.set('diagnostic-mild-symptoms-medicine', DiagnosticMildSymptomsMedicine.execute)

    intentMap.set('diagnostic-severe-symptoms', DiagnosticSevereSymptoms.execute)

    intentMap.set('diagnostic-result', DiagnosticResult.execute)

    agent.handleRequest(intentMap).catch(err => console.log(err))
  })
  .get('/', (req, res) => {
    res.json('Tu não deveria estar aqui, ou deveria?')
  })
export default app
