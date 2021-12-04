import React, { useState } from "react"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import { authUser } from "../utils/auth"
import { login } from "../actions/auth"

import { successAlert, errorAlert } from "../actions/alerts"

function Login(props) {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    props.login(username, setUsername, router)

    /*
      FIXME: instead of calling service (authUser) here directly
      put it in an action, and that action can call the service
      and dispatch the success/failure
    */

    // const resp = await authUser(username, password)
    // if (!resp.auth) {
    //   // alert("WRONG!")
    //   props.errorAlert("incorrect username or password")
    // } else {
    //   // alert("SUCCESS!")
    //   props.successAlert("login success")
    //   setUsername("")
    //   setPassword("")

    //   router.push("/")
    // }
  }

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Username
          <input type="text" onChange={handleChangeUsername} value={username} />
        </div>
        <div>
          Password
          <input
            type="password"
            onChange={handleChangePassword}
            value={password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    alert: state.alert,
  }
}

// const actionCreators = {}
const mapDispatchToProps = (dispatch) => ({
  successAlert: (message) => dispatch(successAlert(message)),
  errorAlert: (message) => dispatch(errorAlert(message)),
  // NOTE: different pattern, put dispatch in action creator
  login,
})

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)

export default connectedLoginPage
