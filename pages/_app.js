import React from "react"
import "../styles/globals.css"

import store from "../store"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

store.dispatch({ type: "questions/add" })
console.log(store.getState())
