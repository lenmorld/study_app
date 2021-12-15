import { combineReducers } from "redux"

import questionsReducer from "./questionsReducer"
import filtersReducer from "./filtersReducer"
import alertsReducer from "./alertReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
  questions: questionsReducer,
  filters: filtersReducer,
  alert: alertsReducer,
  auth: authReducer,
})

export default rootReducer
