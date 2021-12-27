import {
  login as loginService,
  logout as logoutService,
} from "../services/auth"
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../constants/auth"

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
    const result = await loginService(username, password)

    if (result.auth) {
      dispatch({ type: LOGIN_SUCCESS })
      successRedirect()
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: result.message })
      dispatch(errorAlert(result.message))
    }
  }

export const logout = (successRedirect) => {
  logoutService()

  successRedirect()

  return { type: LOGOUT }

  // FIXME: delete entire localStorage on logout as well,
  // if this is user-based
}
