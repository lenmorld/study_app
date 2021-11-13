import React, { useState } from "react"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import { isUserLoggedIn, authUser } from "../utils/auth"

import { successAlert, errorAlert } from "../actions/alerts"

function Login(props) {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  if (isUserLoggedIn()) {
    console.log("Login to /")
    router.push("/")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await authUser(username, password)
    if (!resp.auth) {
      // alert("WRONG!")
      props.errorAlert("incorrect username or password")
    } else {
      // alert("SUCCESS!")
      props.successAlert("login success")
      setUsername("")
      setPassword("")
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
})

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)

export default connectedLoginPage
