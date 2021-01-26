import { responseSymptoms } from '../../responses'
import { UtilsIntents } from '../utils/utils-intents'
export class Symptoms {
  static execute (agent) {
    UtilsIntents.setResponse(agent, responseSymptoms)
    UtilsIntents.setSuggestion(agent, responseSymptoms[0].title, responseSymptoms[0].suggestions)
  }
}
