import { authUser } from "../services/auth"
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../constants/auth"

import { errorAlert } from "./alerts"

export const blahSample = (message) => {
  return { type: "BLAH_SAMPLE", payload: message }
}

// thunk
export const blahThunk = (message) => (dispatch) => {
  // simulate network call
  // use service after
  setTimeout(() => {
    dispatch({ type: "BLAH_SAMPLE", payload: `thunk async yeah: ${message}` })
  }, 3000)
}

export const login =
  (username, password, successRedirect) => async (dispatch) => {
    const result = await authUser(username, password)

    if (result.auth) {
      dispatch({ type: LOGIN_SUCCESS })
      successRedirect()
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: result.message })
      //   dispatch(errorAlert("incorrect username or password"))
      dispatch(errorAlert(result.message))
    }

    // TODO: real error handling
  }
