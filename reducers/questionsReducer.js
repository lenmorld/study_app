import { initialQuestionsState } from "./initialState"

const nextId = (list) => {
  let highest = list.length + 1
  list.forEach((item) => {
    if (item.id > highest) {
      highest = item.id
    }
  })
  return highest
}

export default function questionsReducer(
  state = initialQuestionsState,
  action,
) {
  switch (action.type) {
    case "questions/load": {
      return action.payload
    }

    case "questions/add": {
      const { question, type, answer, tags } = action.payload

      return [
        ...state,
        {
          id: nextId(state),
          question,
          type,
          answer,
          tags,
        },
      ]
    }
    default:
      return state
  }
}

/*
{ type: 'questions/add', payload: { question, type, answer, options, tags } }
{ type: 'questions/edit', payload: { question, type, answer, options, tags } }
// optionally, separate into 'editQuestion', 'editTags', etc

{ type: 'filters/tag', payload: { tag }  }
// TODO: 'filters/tags'
*/
