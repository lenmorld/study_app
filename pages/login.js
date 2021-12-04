import React, { useState } from "react"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import { authUser } from "../services/auth"

import { successAlert, errorAlert } from "../actions/alerts"
import { blahSample, blahThunk } from "../actions/auth"

function Login({ 
  // state
  alert,
  auth,

  // actions
  errorAlert,
  successAlert,
  blahSample,
  blahThunk
 }) {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    blahSample("message sync")
    blahThunk("message async")

    const resp = await authUser(username, password)
    if (!resp.auth) {
      // alert("WRONG!")
      errorAlert("incorrect username or password")
    } else {
      // alert("SUCCESS!")
      successAlert("login success")
      setUsername("")
      setPassword("")

      router.push("/")
    }
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
      <h2>Blah -> {auth.blah}</h2>
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
  blahSample,
  blahThunk
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)

export default connectedLoginPage
