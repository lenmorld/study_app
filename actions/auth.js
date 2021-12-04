import loginRequest from "../services/user.service"

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/auth"

export const login = (username, password, router) => {
  const request = (user) => ({ type: LOGIN_REQUEST, user })
  const success = (user) => ({ type: LOGIN_SUCCESS, user })
  const failure = (error) => ({ type: LOGIN_FAILURE, error })

  return (dispatch) => {
    dispatch(request({ username })) // state is "requesting auth..."

    const user = loginRequest(username, password)
    if (user) {
      dispatch(success(user))
      router.push("/")
    } else {
      dispatch(failure("error"))
    }

    // debugger
    // let user
    // try {
    //   user = loginRequest(username, password)
    //   dispatch(success(user))

    //   router.push("/")
    // } catch (err) {
    //   dispatch(failure(err.toString()))
    // }
  }
}

export const register = () => {}
