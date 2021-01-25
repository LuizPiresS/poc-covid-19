import { responseSymptoms } from '../../responses'
import { YesOrNo } from '../menu/yes-or-no'
import { UtilsIntents } from '../utils/utils-intents'
export class Symptoms {
  static execute (agent) {
    UtilsIntents.setResponse(agent, responseSymptoms)
    YesOrNo.execute(agent, 'Quer consultar?')
  }
}
