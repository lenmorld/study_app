import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { isUserLoggedIn } from "../services/auth"
import { clearAlert } from "../actions/alerts"

const ROUTES_NOT_TO_LOGIN = ["/forgot-password", "/signup"]

// TODO make this an effect

export default function Auth({ children }) {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`,
      )

      // clear alerts
      // * use hooks dispatch
      // instead of mapDispatchToProps
      console.log("[ALERT] clear alerts")
      dispatch(clearAlert())
    }

    const handleRouterComplete = () => {
      console.log("complete")
    }

    router.events.on("routeChangeStart", handleRouteChange)
    router.events.on("routeChangeComplete", handleRouterComplete)

    // cleanup: when component unmounted
    // unsubscribe from event
    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
      router.events.off("routeChangeComplete", handleRouterComplete)
    }
  }, [])

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
    !router.asPath.includes("login") &&
    !ROUTES_NOT_TO_LOGIN.includes(router.pathname)
  ) {
    console.log("/ to /login")
    router.push("/login")
  }

  return children
}
