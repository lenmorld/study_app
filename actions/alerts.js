import { ALERT_CLEAR, ALERT_ERROR, ALERT_SUCCESS } from "../constants/alerts"

export const clearAlert = (message) => ({ type: ALERT_CLEAR, message })
export const successAlert = (message) => ({ type: ALERT_SUCCESS, message })
export const errorAlert = (message) => ({ type: ALERT_ERROR, message })
