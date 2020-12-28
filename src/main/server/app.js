import bodyParser from 'body-parser'
import { WebhookClient } from 'dialogflow-fulfillment'
import express from 'express'
import regeneratorRuntime from 'regenerator-runtime'

import {
  Welcome,
  Farewell,
  Prevention,
  basicPrevention,
  prevencaoProfissional,
  contagio,
  formasDeContagio,
  contagioPeriodoIncubacao,
  menuPrincial
} from '../intents'

const app = express()
app
  .use(bodyParser.json())
  .post('/', (req, res) => {
    const agent = new WebhookClient({ request: req, response: res })
    const intentMap = new Map()
    intentMap.set('message-welcome', Welcome.execute)
    intentMap.set('message-farewell', Farewell.execute)
    intentMap.set('prevention', Prevention.execute)
    intentMap.set('prevention-basica', basicPrevention)
    intentMap.set('prevention-profissional', prevencaoProfissional)
    intentMap.set('contagio-formas-de-contagio', formasDeContagio)
    intentMap.set('contagio', contagio)
    intentMap.set('contagio-periodo-incubacao', contagioPeriodoIncubacao)
    intentMap.set('menu-principal', menuPrincial)

    agent.handleRequest(intentMap)
    console.log(agent.contexts)
    console.log(`Usuario conectado:${agent.originalRequest.payload.data.from.id}`)
  })
  .get('/', (req, res) => {
    res.json('Tu não deveria estar aqui, ou deveria?')
  })
export default app
