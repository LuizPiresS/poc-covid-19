import { Text } from 'dialogflow-fulfillment-helper'

import { APICasesBrazil } from '../../external/apis/APICasesBrazil'
import { AnythingElse } from '../response/AnythingElse'

export class CasesInBrazil {
  static async execute (agent) {
    try {
      console.log(agent.parameters.location.city)
      // Seleciona os casos por estado
      if (agent.parameters.states) {
        const apiCasesBrazil = new APICasesBrazil()
        agent.add(new Text(await apiCasesBrazil.getCasesByStates(agent)))
        AnythingElse.helpMenu(agent)
      }
      // Seleciona os dados por cidade
      if (agent.parameters.location.city) {
        const apiCasesBrazil = new APICasesBrazil()
        agent.add(new Text(await apiCasesBrazil.getCasesByCities(agent)))
        AnythingElse.helpMenu(agent)
      }

      // Seleciona os dados no Brasil
      if (agent.parameters.location.country === 'Brasil') {
        const apiCasesBrazil = new APICasesBrazil()
        agent.add(new Text(await apiCasesBrazil.getCasesFromCountries(agent)))
      } else {
        agent.add(new Text('Desculpe, no momento eu consigo te\n ' +
          'informar apenas sobre casos\n ' +
          'de Coronavírus no Brasil. 😕'))
        agent.add(new Text('Qual local você quer consultar? 🔎'))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
