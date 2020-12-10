import bodyParser from 'body-parser'
import express from 'express'

// import intents from '../intents'
const app = express()

app
  .use(bodyParser.json())
  .post('/', (req, res) => {
    res.json('Endpoint principal')
  })
  .get('/', (req, res) => {
    res.json('Tu não deveria estar aqui')
  })
export default app
