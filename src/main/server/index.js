import config from 'config'

import app from './app'

const appConfig = config.get('App')
const PORT = process.env.PORT || appConfig.port || 1313

app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
)
