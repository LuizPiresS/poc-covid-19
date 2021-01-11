import { Text } from 'dialogflow-fulfillment-helper'

import { APICasesBrazil } from '../../external/apis/APICasesBrazil'
import { AnythingElse } from '../response/AnythingElse'

export class CasesInBrazil {
  static async execute (agent) {
    try {
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
      }
      if (agent.parameters.location.country) {
        if (agent.parameters.location.city === '' && agent.parameters.location.country !== 'Brasil') {
          console.log('------------' + agent.parameters.location.country)
          agent.add(new Text('Desculpe, no momento eu consigo te\n ' +
              'informar apenas sobre casos\n ' +
              'de Coronavírus no Brasil. 😕'))
          agent.add(new Text('Qual local você quer consultar? 🔎'))
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}
