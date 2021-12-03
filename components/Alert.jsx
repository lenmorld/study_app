import React from "react"
import { connect } from "react-redux"
import styles from "./Alert.module.css"

import { clearAlert } from "../actions/alerts"

// TODO: make this a portal

// see reducers/alert.js for the classes
// alert-success
// alert-error
// ...
function Alert({ alert }) {
  const { type, message } = alert

  return (
    <div className={styles.alert}>
      <div className={styles[type]}>{message}</div>
    </div>
  )
}

function mapStateToProps(state) {
  console.log("mapStateToProps state: ", state)
  return {
    alert: state.alert,
  }
}

const actionCreators = {
  clearAlerts: clearAlert,
}

const connectedAlert = connect(mapStateToProps, actionCreators)(Alert)

export default connectedAlert
