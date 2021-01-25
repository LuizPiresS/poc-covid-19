import { yesOrNo } from '../../responses'
import { UtilsIntents } from '../utils/utils-intents'

export class YesOrNo {
  static execute (agent, title) {
    const titleSuggest = title || yesOrNo[0].title
    UtilsIntents.setSuggestion(agent, titleSuggest, yesOrNo[0].suggestions)
  }
}
