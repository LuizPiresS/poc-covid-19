
import { Text } from 'dialogflow-fulfillment-helper'

import { ApiCasesBrazil } from '../../external/apis/api-cases-brazil'
import { AnythingElse } from '../menu/anything-else'

export class CasesInBrazilByCities {
  static async execute (agent) {
    try {
      const apiCasesBrazil = new ApiCasesBrazil()
      const citiesData = await apiCasesBrazil.getCasesByCities(agent.parameters.cities, agent.parameters.states)

      // Verifica se houve algum erro  com a comunicação com a api
      if (citiesData.statusCode === 500) {
        agent.add(new Text('Desculpe, não estou conseguindo acessar o sistema no momento. Por favor, tente novamente mais tarde.'))
        AnythingElse.execute(agent)
      }

      const results = citiesData.results[0]

      let message = `
      Aqui estão os dados mais recentes para a cidade de ${results.city}:

      ⚠ Total de casos:

      - Confirmados: ${results.last_available_confirmed}
      - Mortes: ${results.last_available_deaths}

      ⚠ Casos no dia de hoje:

      - Confirmados: ${results.new_confirmed}
      - Mortes: ${results.new_deaths}

      `
      // TODO: Refatorar para fazer o tratamento das cidades com nomes iguais
      if (citiesData.count > 1) {
        console.log('mais de uma cidade', agent.parameters.states)
        // const context = { name: 'cases-brazil', lifespan: 1, parameters: { city: `${results.city}` } }
        // agent.setContext(context)
        message = `O Brasil possui mais de uma cidade com o nome de ${results.city},\n por favor informe a cidade e o estado para que eu possa te ajudar`
      }

      if (citiesData.count === 0) {
        message = 'Sinto muito! Por enquanto meu banco de dados ainda não possui estas informações detalhadas.\n' +
          '\n' +
          'Mas estou sempre aprendendo. Você pode tentar de novo no futuro.'
      }

      agent.add(new Text(message))
      AnythingElse.execute(agent)
    } catch (error) {
      console.log(error)
      agent.add(new Text('Desculpe, não estou conseguindo acessar o sistema no momento. Por favor, tente novamente mais tarde.'))
      AnythingElse.execute(agent)
    }
  }
}
