import { initialFiltersState } from "./initialState"

export default function filtersReducer(state = initialFiltersState, action) {
  switch (action.type) {
    case "filters/tags": {
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
