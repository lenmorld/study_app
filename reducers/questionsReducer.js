import { initialQuestionsState } from "./initialState"

export default function questionsReducer(
  state = initialQuestionsState,
  action,
) {
  switch (action.type) {
    case "questions/add": {
      return state
    }
    default:
      return state
  }
}

/*
{ type: 'questions/add', payload: { text, type, answer, options, tags } }
{ type: 'questions/edit', payload: { text, type, answer, options, tags } }
// optionally, separate into 'editQuestion', 'editTags', etc

{ type: 'filters/tag', payload: { tag }  }
// TODO: 'filters/tags'
*/
