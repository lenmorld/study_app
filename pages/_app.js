import React from "react"
import { Provider } from "react-redux"
import Layout from "../components/Layout"
import Alert from "../components/Alert"
import Auth from "../components/Auth"

import "../styles/globals.css"

import store from "../store"

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Layout>
          <Alert />
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </Layout>
      </Provider>
    </React.StrictMode>
  )
}

export default MyApp

// console.log("==== store tests ====")
// store.dispatch({ type: "questions/add" })
// console.log(store.getState())

// store.dispatch({
//   type: "ALERT_SUCCESS",
//   message: "hehey",
// })
