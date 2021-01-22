import { Text } from 'dialogflow-fulfillment-helper'

import { ApiCasesBrazil } from '../../external/apis/api-cases-brazil'
import { AnythingElse } from '../menu/anything-else'

export class CasesInBrazil {
  static async execute (agent) {
    try {
      const apiCasesBrazil = new ApiCasesBrazil()
      const countryData = await apiCasesBrazil.getCasesFromCountries()
      if (agent.parameters.country !== 'Brasil') {
        agent.add(new Text('Desculpe, no momento eu consigo te\n ' +
          'informar apenas sobre casos\n ' +
          'de Coronavírus no Brasil. 😕'))
        agent.add(new Text('Qual local você quer consultar? 🔎'))
      }

      if (agent.parameters.country === 'Brasil') {
        const message = `Aqui estão os dados mais recentes para o Brasil:

  ⚠ Total de casos:

  - Confirmados: ${countryData.data.confirmed}
  - Recuperados: ${countryData.data.recovered}
  - Mortes: ${countryData.data.deaths}

  Você pode consultar o status de casos de
  qualquer cidade ou estado no Brasil.

  Qual local você quer consultar? 🔎`

        agent.add(new Text(message))
      }
    } catch (error) {
      console.log(error)
      agent.add(new Text('Desculpe, não estou conseguindo acessar o sistema no momento. Por favor, tente novamente mais tarde.'))
      AnythingElse.execute(agent)
    }
  }
}
