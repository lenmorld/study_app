import React, { useState } from "react"
import { useRouter } from "next/router"
import { connect } from "react-redux"

import { successAlert, errorAlert } from "../actions/alerts"
// moved login to action, which calls the service
// import { authUser } from "../services/auth"
import { login } from "../actions/auth"

import TextInput from "./atoms/TextInput"

function Login({
  // state
  alert,
  auth,

  // actions
  errorAlert,
  successAlert,

  // auth
  loginAction,
}) {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const successRedirect = () => router.push("/")

    loginAction(username, password, successRedirect)
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
        <TextInput
          label="Username / Email"
          type="text"
          onChange={handleChangeUsername}
          value={username}
        />
        <TextInput
          label="Password"
          type="password"
          onChange={handleChangePassword}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  console.log("state: ", state)

  return {
    alert: state.alert,
    auth: state.auth,
  }
}

// const actionCreators = {}
// const mapDispatchToProps = (dispatch) => ({
//   successAlert: (message) => dispatch(successAlert(message)),
//   errorAlert: (message) => dispatch(errorAlert(message)),
//   blahSample: (message) => dispatch(blahSample(message)),
//   blahThunk: (message) => dispatch(blahThunk(message)),
// blahSample,
// })

// optionally, mapDispatchToProps object
const mapDispatchToProps = {
  successAlert,
  errorAlert,
  loginAction: login,
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)

export default connectedLoginPage
