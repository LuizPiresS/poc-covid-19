import bodyParser from 'body-parser'
import { WebhookClient } from 'dialogflow-fulfillment-helper'
import express from 'express'

// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime'

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
  CasesInBrazilByStates
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

    intentMap.set('contagion-contagion', Contagion.execute)
    intentMap.set('contagion-contagion-forms', ContagionForms.execute)
    intentMap.set('contagion-incubation-period', IncubationPeriod.execute)

    intentMap.set('main-menu', MainMenu.execute)

    intentMap.set('cases-brazil', CasesInBrazil.execute)
    intentMap.set('cases-brazil-states', CasesInBrazilByStates.execute)
    intentMap.set('cases-brazil-cities', CasesInBrazilByCities.execute)
    intentMap.set('fallback-cases-brazil-final', FallBackCasesFromBrazil.execute)

    agent.handleRequest(intentMap).catch(err => console.log(err))
    console.log(agent.originalRequest.payload.data.sender)
  })
  .get('/', (req, res) => {
    res.json('Tu não deveria estar aqui, ou deveria?')
  })
export default app
