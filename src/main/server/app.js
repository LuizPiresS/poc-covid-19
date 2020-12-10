import bodyParser from 'body-parser'
import { WebhookClient } from 'dialogflow-fulfillment'
import express from 'express'

import { saudacoesMensagemBoasVindas } from '../intents'
const app = express()
process.env.DEBUG = 'dialogflow:debug' // enables lib debugging statements
app
  .use(bodyParser.json())
  .post('/', (req, res) => {
    const agent = new WebhookClient({ request: req, response: res })
    const intentMap = new Map()
    intentMap.set('saudacoes-mensagem-boas-vindas', saudacoesMensagemBoasVindas)
    agent.handleRequest(intentMap)
    // console.log(agent.originalRequest.payload.data.from)
  })
  .get('/', (req, res) => {
    res.json('Tu não deveria estar aqui')
  })
export default app
