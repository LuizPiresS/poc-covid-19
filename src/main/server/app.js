import bodyParser from 'body-parser'
import { WebhookClient } from 'dialogflow-fulfillment-helper'
import express from 'express'

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
  CasesBrazil
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
    intentMap.set('cases-cases-brazil', CasesBrazil.execute)

    agent.handleRequest(intentMap)
    console.log(agent.contexts)
    console.log(`Usuario conectado:${agent.originalRequest.payload.data.from.id}`)
  })
  .get('/', (req, res) => {
    res.json('Tu não deveria estar aqui, ou deveria?')
  })
export default app
