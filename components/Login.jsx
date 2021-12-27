import React, { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { connect } from "react-redux"

import styles from "./Login.module.css"

import { successAlert, errorAlert } from "../actions/alerts"
// moved login to action, which calls the service
// import { authUser } from "../services/auth"
import { login } from "../actions/auth"

import TextInput from "./atoms/TextInput"

import Button from "./atoms/Button"

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
    <div className={styles.container}>
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
        <Button size="medium" type="submit" success style={{ width: "100%" }}>
          Login
        </Button>
        <p>
          <Link href="/forgot-password">
            <a>Forgot password?</a>
          </Link>
        </p>
        <p>
          <Link href="/signup">
            <a>No account yet? Sign up</a>
          </Link>
        </p>
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
