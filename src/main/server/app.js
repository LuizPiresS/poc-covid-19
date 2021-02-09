
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
  PreDiagnosticBasicFeverFallbackInitial,
  DiagnosticBasicFeverFallbackMid,
  DiagnosticBasicFeverFallbackFinal,
  PreDiagnosticMildSymptoms,
  PreDiagnosticMildSymptomsFallbackInitial,
  PreDiagnosticMildSymptomsFallbackMid,
  PreDiagnosticMildSymptomsFallbackFinal,
  PreDiagnosticMildSymptomsThreeOrMore,
  DiagnosticMildSymptomsThreeOrMoreFallbackInitial,
  DiagnosticMildSymptomsThreeOrMoreFallbackMid,
  DiagnosticMildSymptomsThreeOrMoreFallbackFinal,
  PreDiagnosticMildSymptomsMedicine,
  PreDiagnosticMildSymptomsMedicineTookEffect,
  PreDiagnosticMildSymptomsMedicineNoEffect,
  PreDiagnosticMildSymptomsMedicineFallbackInitial,
  PreDiagnosticMildSymptomsMedicineFallbackMid,
  PreDiagnosticMildSymptomsMedicineFallbackFinal,
  DiagnosticSevereSymptoms,
  DiagnosticSevereSymptomsYes,
  DiagnosticSevereSymptomsNo,
  DiagnosticSevereSymptomsFallbackInitial,
  DiagnosticSevereSymptomsFallbackMid,
  DiagnosticSevereSymptomsFallbackFinal,
  DiagnosticResult
} from '../intents'
import { UtilsIntents } from '../intents/utils/utils-intents'

const app = express()
app
  .use(bodyParser.json())
  .post('/', (req, res) => {
    const agent = new WebhookClient({ request: req, response: res })

    // Envia as mensagens do usuario para o chatbase
    UtilsIntents.logChatbaseMessagesUsers(agent, req.body.queryResult.intent.displayName)
      .then(r => console.log(r)).catch(error => console.log(error))

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

    intentMap.set('diagnostic-basic-group-of-risk-fallback-initial', DiagnosticBasicGroupOfRiskFallbackInitial.execute)
    intentMap.set('diagnostic-basic-group-of-risk-fallback-mid', DiagnosticBasicGroupOfRiskFallbackMid.execute)
    intentMap.set('diagnostic-basic-group-of-risk-fallback-final', DiagnosticBasicGroupOfRiskFallbackFinal.execute)

    intentMap.set('diagnostic-basic-fever', DiagnosticBasicFever.execute)
    intentMap.set('diagnostic-basic-fever-yes', DiagnosticBasicFeverYes.execute)
    intentMap.set('diagnostic-basic-fever-no', DiagnosticBasicFeverNo.execute)

    intentMap.set('pre-diagnostic-basic-fever-fallback-initial', PreDiagnosticBasicFeverFallbackInitial.execute)
    intentMap.set('diagnostic-basic-fever-fallback-mid', DiagnosticBasicFeverFallbackMid.execute)
    intentMap.set('diagnostic-basic-fever-fallback-final', DiagnosticBasicFeverFallbackFinal.execute)

    intentMap.set('pre-diagnostic-mild-symptoms', PreDiagnosticMildSymptoms.execute)

    intentMap.set('pre-diagnostic-mild-symptoms-fallback-initial', PreDiagnosticMildSymptomsFallbackInitial.execute)
    intentMap.set('pre-diagnostic-mild-symptoms-fallback-middle', PreDiagnosticMildSymptomsFallbackMid.execute)
    intentMap.set('pre-diagnostic-mild-symptoms-fallback-finall', PreDiagnosticMildSymptomsFallbackFinal.execute)

    intentMap.set('pre-diagnostic-mild-symptoms-three-or-more', PreDiagnosticMildSymptomsThreeOrMore.execute)
    intentMap.set('diagnostic-mild-symptoms-three-or-more-fallback-initial', DiagnosticMildSymptomsThreeOrMoreFallbackInitial.execute)
    intentMap.set('diagnostic-mild-symptoms-three-or-more-fallback-mid', DiagnosticMildSymptomsThreeOrMoreFallbackMid.execute)
    intentMap.set('diagnostic-mild-symptoms-three-or-more-fallback-final', DiagnosticMildSymptomsThreeOrMoreFallbackFinal.execute)

    intentMap.set('pre-diagnostic-mild-symptoms-medicine', PreDiagnosticMildSymptomsMedicine.execute)
    intentMap.set('pre-diagnostic-mild-symptoms-medicine-took-effect', PreDiagnosticMildSymptomsMedicineTookEffect.execute)
    intentMap.set('pre-diagnostic-mild-symptoms-medicine-no-effect', PreDiagnosticMildSymptomsMedicineNoEffect.execute)

    intentMap.set('pre-diagnostic-mild-symptoms-medicine-fallback-initial', PreDiagnosticMildSymptomsMedicineFallbackInitial.execute)
    intentMap.set('pre-diagnostic-mild-symptoms-medicine-fallback-mid', PreDiagnosticMildSymptomsMedicineFallbackMid.execute)
    intentMap.set('pre-diagnostic-mild-symptoms-medicine-fallback-final', PreDiagnosticMildSymptomsMedicineFallbackFinal.execute)

    intentMap.set('pre-diagnostic-severe-symptoms', DiagnosticSevereSymptoms.execute)
    intentMap.set('pre-diagnostic-severe-symptoms-yes', DiagnosticSevereSymptomsYes.execute)
    intentMap.set('pre-diagnostic-severe-symptoms-no', DiagnosticSevereSymptomsNo.execute)

    intentMap.set('pre-diagnostic-severe-symptoms-fallback-initial', DiagnosticSevereSymptomsFallbackInitial.execute)
    intentMap.set('pre-diagnostic-severe-symptoms-fallback-mid', DiagnosticSevereSymptomsFallbackMid.execute)
    intentMap.set('pre-diagnostic-severe-symptoms-fallback-final', DiagnosticSevereSymptomsFallbackFinal.execute)

    intentMap.set('pre-diagnostic-result', DiagnosticResult.execute)

    agent.handleRequest(intentMap).catch(err => console.log(err))
  })
  .get('/', (req, res) => {
    res.json('Tu não deveria estar aqui, ou deveria?')
  })
export default app

// diagnostic-basic-group-of-risk-yes
// diagnostic-basic-group-of-risk-followup diagnostic-basic-group-of-risk-yes
