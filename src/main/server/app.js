
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
  DiagnosticBasicFeverYes,
  DiagnosticBasicFeverNo,
  DiagnosticBasicFeverFallbackInitial,
  DiagnosticBasicFeverFallbackMid,
  DiagnosticBasicFeverFallbackFinal,
  DiagnosticMildSymptoms,
  DiagnosticMildSymptomsFallbackInitial,
  DiagnosticMildSymptomsFallbackMid,
  DiagnosticMildSymptomsFallbackFinal,
  DiagnosticMildSymptomsThreeOrMore,
  DiagnosticMildSymptomsThreeOrMoreFallbackInitial,
  DiagnosticMildSymptomsThreeOrMoreFallbackMid,
  DiagnosticMildSymptomsThreeOrMoreFallbackFinal,
  DiagnosticMildSymptomsMedicine,
  DiagnosticMildSymptomsMedicineTookEffect,
  DiagnosticMildSymptomsMedicineFallbackInitial,
  DiagnosticMildSymptomsMedicineFallbackMid,
  DiagnosticMildSymptomsMedicineFallbackFinal,
  DiagnosticSevereSymptoms,
  DiagnosticResult, DiagnosticSevereSymptomsYes, DiagnosticSevereSymptomsNo

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

    intentMap.set('nlp-erro-entendimento-fallbacks-initial', NlpGenericFallbackInitial.execute)
    intentMap.set('nlp-erro-entendimento-fallbacks-middle', NlpGenericFallbackMiddle.execute)
    intentMap.set('nlp-erro-entendimento-fallbacks-final', NlpGenericFallbackFinal.execute)

    intentMap.set('prevention', Prevention.execute)
    intentMap.set('prevention-basic-prevention', BasicPrevention.execute)
    intentMap.set('prevention-professional-prevention', ProfessionalPrevention.execute)

    intentMap.set('contagion', Contagion.execute)
    intentMap.set('contagion-forms', ContagionForms.execute)
    intentMap.set('contagion-incubation-period', IncubationPeriod.execute)

    intentMap.set('contagion-prevention-fallbacks-initial', ContagionPreventionFallbackInitial.execute)
    intentMap.set('contagion-prevention-fallbacks-middle', ContagionPreventionFallbackResponseMiddle.execute)
    intentMap.set('contagion-prevention-fallbacks-finall', ContagionPreventionFallbackResponseFinal.execute)

    intentMap.set('main-menu', MainMenu.execute)

    intentMap.set('cases-brazil', CasesInBrazil.execute)
    intentMap.set('cases-brazil-states', CasesInBrazilByStates.execute)
    intentMap.set('cases-brazil-cities', CasesInBrazilByCities.execute)

    intentMap.set('cases-brazil-fallbacks-initial', CasesBrazilFallbackInitial.execute)
    intentMap.set('cases-brazil-fallbacks-middle', CasesBrazilFallbackMiddle.execute)
    intentMap.set('fallbacks-cases-brazil-final', CasesBrazilFallbackFinal.execute)

    intentMap.set('pre-diagnostic', PreDiagnostic.execute)
    intentMap.set('diagnostic-basic', DiagnosticBasic.execute)
    intentMap.set('pre-diagnostic-no', PreDiagnosticNo.execute)

    intentMap.set('diagnostic-basic-group-of-risk', DiagnosticBasicGroupOfRisk.execute)
    intentMap.set('diagnostic-basic-group-of-risk-yes', DiagnosticBasicGroupOfRiskYes.execute)
    intentMap.set('diagnostic-basic-group-of-risk-no', DiagnosticBasicGroupOfRiskNo.execute)
    intentMap.set('diagnostic-basic-group-of-risk-fallbacks-initial', DiagnosticBasicGroupOfRiskFallbackInitial.execute)
    intentMap.set('diagnostic-basic-group-of-risk-fallbacks-mid', DiagnosticBasicGroupOfRiskFallbackMid.execute)
    intentMap.set('diagnostic-basic-group-of-risk-fallbacks-final', DiagnosticBasicGroupOfRiskFallbackFinal.execute)

    intentMap.set('diagnostic-basic-fever', DiagnosticBasicFever.execute)
    intentMap.set('diagnostic-basic-fever-yes', DiagnosticBasicFeverYes.execute)
    intentMap.set('diagnostic-basic-fever-no', DiagnosticBasicFeverNo.execute)

    intentMap.set('diagnostic-basic-fever-fallbacks-initial', DiagnosticBasicFeverFallbackInitial.execute)
    intentMap.set('diagnostic-basic-fever-fallbacks-mid', DiagnosticBasicFeverFallbackMid.execute)
    intentMap.set('diagnostic-basic-fever-fallbacks-final', DiagnosticBasicFeverFallbackFinal.execute)

    intentMap.set('diagnostic-mild-symptoms', DiagnosticMildSymptoms.execute)

    intentMap.set('diagnostic-mild-symptoms-fallback-initial', DiagnosticMildSymptomsFallbackInitial.execute)
    intentMap.set('diagnostic-mild-symptoms-fallback-mid', DiagnosticMildSymptomsFallbackMid.execute)
    intentMap.set('diagnostic-mild-symptoms-fallback-final', DiagnosticMildSymptomsFallbackFinal.execute)

    intentMap.set('diagnostic-mild-symptoms-three-or-more', DiagnosticMildSymptomsThreeOrMore.execute)
    intentMap.set('diagnostic-mild-symptoms-three-or-more-fallback-initial', DiagnosticMildSymptomsThreeOrMoreFallbackInitial.execute)
    intentMap.set('diagnostic-mild-symptoms-three-or-more-fallback-mid', DiagnosticMildSymptomsThreeOrMoreFallbackMid.execute)
    intentMap.set('diagnostic-mild-symptoms-three-or-more-fallback-final', DiagnosticMildSymptomsThreeOrMoreFallbackFinal.execute)

    intentMap.set('diagnostic-mild-symptoms-medicine', DiagnosticMildSymptomsMedicine.execute)
    intentMap.set('diagnostic-mild-symptoms-medicine-took-effect', DiagnosticMildSymptomsMedicineTookEffect.execute)

    intentMap.set('diagnostic-mild-symptoms-medicine-fallback-initial', DiagnosticMildSymptomsMedicineFallbackInitial.execute)
    intentMap.set('diagnostic-mild-symptoms-medicine-fallback-mid', DiagnosticMildSymptomsMedicineFallbackMid.execute)
    intentMap.set('diagnostic-mild-symptoms-medicine-fallback-final', DiagnosticMildSymptomsMedicineFallbackFinal.execute)

    intentMap.set('diagnostic-severe-symptoms', DiagnosticSevereSymptoms.execute)
    intentMap.set('diagnostic-severe-symptoms-yes', DiagnosticSevereSymptomsYes.execute)
    intentMap.set('diagnostic-severe-symptoms-no', DiagnosticSevereSymptomsNo.execute)

    intentMap.set('pre-diagnostic-result', DiagnosticResult.execute)

    agent.handleRequest(intentMap).catch(err => console.log(err))
  })
  .get('/', (req, res) => {
    res.json('Tu não deveria estar aqui, ou deveria?')
  })
export default app
