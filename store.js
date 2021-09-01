import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"

import { loadState, saveState } from "./utils/localStorage"

import rootReducer from "./reducers/reducer"

// enhancer
export const print1 = (storeAPI) => (next) => (action) => {
  console.log("1")
  return next(action)
}

// const middlewareEnhancer = applyMiddleware(print1)

const composedEnhancer = composeWithDevTools(
  applyMiddleware(print1, thunkMiddleware),
)

const preloadedState = loadState("quizApp")

const store = createStore(rootReducer, preloadedState, composedEnhancer)

// every state change, save to localStorage
store.subscribe(() => {
  saveState("quizApp", store.getState())
})

export default store
