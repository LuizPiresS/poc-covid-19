
import { Text } from 'dialogflow-fulfillment-helper'

import { APICasesBrazil } from '../../external/apis/APICasesBrazil'
import { AnythingElse } from '../response/AnythingElse'

export class CasesInBrazilByCities {
  static async execute (agent) {
    try {
      const apiCasesBrazil = new APICasesBrazil()
      const citiesData = await apiCasesBrazil.getCasesByCities(agent.parameters.cities, agent.parameters.states)

      // Verifica se houve algum erro  com a comunicação com a api
      if (citiesData.statusCode === 500) {
        agent.add(new Text('Desculpe, não estou conseguindo acessar o\n sistema no momento. Por favor, tente\n novamente mais tarde.'))
        AnythingElse.helpMenu(agent)
      }

      const results = citiesData.results[0]
      // console.log(citiesData)
      let message = `
      Aqui estão os dados mais recentes para a cidade de ${results.city}:

      ⚠ Total de casos:

      - Confirmados: ${results.last_available_confirmed}
      - Mortes: ${results.last_available_deaths}

      ⚠ Casos no dia de hoje:

      - Confirmados: ${results.new_confirmed}
      - Mortes: ${results.new_deaths}

      `

      if (citiesData.count === 0) {
        message = 'Sinto muito! Por enquanto meu banco de dados\n' +
                  'ainda não possui estas informações detalhadas.\n' +
                  '\n' +
                  'Mas estou sempre aprendendo. Você pode\n' +
                  'tentar de novo no futuro.'
      }
      // TODO: O bot deve guardar a cidade que o usuario pesquisou e perguntar apenas o estado
      if (citiesData.count > 1) {
        message = `O Brasil possui mais de uma cidade com o nome de ${results.city}, por favor informe a cidade e o estado para que eu possa te ajudar`
      }

      agent.add(new Text(message))
      AnythingElse.helpMenu(agent)
    } catch (error) {
      console.log(error)
      agent.add(new Text('Desculpe, não estou conseguindo acessar o\n sistema no momento. Por favor, tente\n novamente mais tarde.'))
      AnythingElse.helpMenu(agent)
    }
  }
}
