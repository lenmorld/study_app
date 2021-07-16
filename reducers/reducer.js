import { combineReducers } from "redux"

import questionsReducer from "./questionsReducer"
import filtersReducer from "./filtersReducer"

const rootReducer = combineReducers({
  questions: questionsReducer,
  filters: filtersReducer,
})

export default rootReducer
