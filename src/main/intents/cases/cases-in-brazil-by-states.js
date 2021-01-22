import { Text } from 'dialogflow-fulfillment-helper'

import { ApiCasesBrazil } from '../../external/apis/api-cases-brazil'
import { AnythingElse } from '../menu/anything-else'

export class CasesInBrazilByStates {
  static async execute (agent) {
    try {
      const apiCasesBrazil = new ApiCasesBrazil()
      const stateData = await apiCasesBrazil.getCasesByStates(agent.parameters.states)

      // Verifica se houve algum erro  com a comunicação com a api
      if (stateData.statusCode === 500) {
        agent.add(new Text('Desculpe, não estou conseguindo acessar o\n sistema no momento. Por favor, tente\n novamente mais tarde.'))
        AnythingElse.execute(agent)
      }

      const results = stateData.results[0]
      const state = results.state
      let messageSPRJ
      if (state === 'SP') {
        messageSPRJ = '👉 Para informações sobre a cidade de São Paulo busque por:\n ' +
                      'São Paulo SP  👈'
      } else if (state === 'RJ') {
        messageSPRJ = '👉 Para informações sobre a cidade do Rio de Janeiro busque por:\n ' +
                      'Rio de Janeiro RJ  👈'
      } else {
        messageSPRJ = ''
      }
      const message = `
      Aqui estão os dados mais recentes para o estado ${state}:

      ⚠ Total de casos:

      - Confirmados: ${results.last_available_confirmed}
      - Mortes: ${results.last_available_deaths}

      ⚠ Casos no dia de hoje:

      - Confirmados: ${results.new_confirmed}
      - Mortes: ${results.new_deaths}

       ${messageSPRJ}`

      // const apiCasesBrazil = new ApiCasesBrazil()

      agent.add(new Text(message))

      AnythingElse.execute(agent)
    } catch (error) {
      console.log(error)
      agent.add(new Text('Desculpe, não estou conseguindo acessar o sistema no momento. Por favor, tente novamente mais tarde.'))
      AnythingElse.execute(agent)
    }
  }
}
