import React, { useState } from "react"
import { useRouter } from "next/router"
import { isUserLoggedIn } from "../utils/auth"

export default function Auth({ children }) {
  const router = useRouter()

  // if (url.includes("login") && isUserLoggedIn()) {
  if (
    typeof window !== "undefined" &&
    isUserLoggedIn() &&
    router &&
    router.asPath.includes("login")
  ) {
    console.log("Login to /")
    router.push("/")
  }

  if (
    typeof window !== "undefined" &&
    !isUserLoggedIn() &&
    router &&
    !router.asPath.includes("login")
  ) {
    console.log("/ to /login")
    router.push("/login")
  }

  return children
}
