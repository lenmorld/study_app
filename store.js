import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"

import { loadState, saveState } from "./utils/localStorage"

import rootReducer from "./reducers/reducer"

const loggerMiddleware = createLogger()

// enhancer
export const print1 = (storeAPI) => (next) => (action) => {
  console.log("1")
  return next(action)
}

// const middlewareEnhancer = applyMiddleware(print1)

const composedEnhancer = composeWithDevTools(
  applyMiddleware(print1, loggerMiddleware, thunkMiddleware),
)

const preloadedState = loadState("quizApp")

const store = createStore(rootReducer, preloadedState, composedEnhancer)

// every state change, save to localStorage
store.subscribe(() => {
  saveState("quizApp", store.getState())
})

export default store
