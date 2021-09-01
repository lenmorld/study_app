import React from "react"
import { Provider } from "react-redux"
import Layout from "../components/Layout"

import "../styles/globals.css"

import store from "../store"

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </React.StrictMode>
  )
}

export default MyApp

// console.log("==== store tests ====")
// store.dispatch({ type: "questions/add" })
// console.log(store.getState())
