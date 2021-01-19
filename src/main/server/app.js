
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
  FallBackCasesFromBrazil,
  CasesInBrazilByCities,
  CasesInBrazilByStates,
  CasesBrazilFallbackInitial,
  CasesBrazilFallbackMiddle,
  ContagionPreventionFallbackInitial,
  ContagionPreventionFallbackResponseMiddle,
  ContagionPreventionFallbackResponseFinal
} from '../intents'

const app = express()
app
  .use(bodyParser.json())
  .post('/', (req, res) => {
    const agent = new WebhookClient({ request: req, response: res })
    const intentMap = new Map()
    intentMap.set('response-welcome', Welcome.execute)
    intentMap.set('response-farewell', Farewell.execute)

    intentMap.set('prevention', Prevention.execute)
    intentMap.set('prevention-basic-prevention', BasicPrevention.execute)
    intentMap.set('prevention-professional-prevention', ProfessionalPrevention.execute)

    intentMap.set('contagion', Contagion.execute)
    intentMap.set('contagion-forms', ContagionForms.execute)
    intentMap.set('contagion-incubation-period', IncubationPeriod.execute)

    intentMap.set('contagion-prevention-fallback-initial', ContagionPreventionFallbackInitial.execute)
    intentMap.set('contagion-prevention-fallback-middle', ContagionPreventionFallbackResponseMiddle.execute)
    intentMap.set('contagion-prevention-fallback-end', ContagionPreventionFallbackResponseFinal.execute)

    intentMap.set('main-menu', MainMenu.execute)

    intentMap.set('cases-brazil', CasesInBrazil.execute)
    intentMap.set('cases-brazil-states', CasesInBrazilByStates.execute)
    intentMap.set('cases-brazil-cities', CasesInBrazilByCities.execute)

    intentMap.set('cases-brazil-fallback-initial', CasesBrazilFallbackInitial.execute)
    intentMap.set('cases-brazil-fallback-middle', CasesBrazilFallbackMiddle.execute)
    intentMap.set('fallback-cases-brazil-final', FallBackCasesFromBrazil.execute)

    agent.handleRequest(intentMap).catch(err => console.log(err))
  })
  .get('/', (req, res) => {
    res.json('Tu não deveria estar aqui, ou deveria?')
  })
export default app
