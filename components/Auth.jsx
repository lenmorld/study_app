import React, { useState } from "react"
import { useRouter } from "next/router"
import { isUserLoggedIn } from "../utils/auth"

export default function Auth({ children }) {
  const router = useRouter()

  if (
    typeof window !== "undefined" &&
    !isUserLoggedIn() &&
    !router.asPath.includes("login")
  ) {
    console.log("/ to /login")
    router.push("/login")
  }

  return children
}
