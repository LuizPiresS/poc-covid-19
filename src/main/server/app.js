import bodyParser from 'body-parser'
import { WebhookClient } from 'dialogflow-fulfillment'
import express from 'express'
import regeneratorRuntime from 'regenerator-runtime'

import {
  saudacoesMensagemBoasVindas,
  saudacoesMensagemDespedida,
  covidPrevencao,
  covidPrevencaoBasica,
  covidPrevencaoProfissional,
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
    intentMap.set('saudacoes-mensagem-boas-vindas', saudacoesMensagemBoasVindas)
    intentMap.set('saudacoes-mensagem-despedida', saudacoesMensagemDespedida)
    intentMap.set('covid-prevencao', covidPrevencao)
    intentMap.set('covid-prevencao-basica', covidPrevencaoBasica)
    intentMap.set('covid-prevencao-profissional', covidPrevencaoProfissional)
    intentMap.set('contagio-formas-de-contagio', formasDeContagio)
    intentMap.set('contagio', contagio)
    intentMap.set('contagio-periodo-incubacao', contagioPeriodoIncubacao)
    intentMap.set('menu-principal', menuPrincial)

    agent.handleRequest(intentMap)

    console.log(`Usuario conectado:${agent.originalRequest.payload.data.from.id}`)
  })
  .get('/', (req, res) => {
    res.json('Tu não deveria estar aqui')
  })
export default app
