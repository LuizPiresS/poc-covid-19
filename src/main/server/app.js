import bodyParser from 'body-parser'
import { WebhookClient } from 'dialogflow-fulfillment'
import express from 'express'
import regeneratorRuntime from 'regenerator-runtime'

import {
  BoasVindas,
  despedida,
  prevencao,
  prevencaoBasica,
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
    intentMap.set('respostas-boas-vindas', BoasVindas.execute)
    intentMap.set('mensagens-mensagem-despedida', despedida)
    intentMap.set('prevencao', prevencao)
    intentMap.set('prevencao-basica', prevencaoBasica)
    intentMap.set('prevencao-profissional', prevencaoProfissional)
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
