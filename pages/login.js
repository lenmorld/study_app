import React from "react"
import { useRouter } from "next/router"
import { isUserLoggedIn } from "../utils/auth"

export default function Login() {
  console.log("to Login")

  const router = useRouter()

  if (isUserLoggedIn()) {
    console.log("Login to /")
    router.push("/")
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          Username
          <input type="text" />
        </div>
        <div>
          Password
          <input type="password" />
        </div>
      </form>
    </div>
  )
}
