import { combineReducers } from "redux"

import questionsReducer from "./questionsReducer"
import filtersReducer from "./filtersReducer"
import alertsReducer from "./alertReducer"

const rootReducer = combineReducers({
  questions: questionsReducer,
  filters: filtersReducer,
  alert: alertsReducer,
})

export default rootReducer
