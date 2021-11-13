import { ALERT_CLEAR, ALERT_ERROR, ALERT_SUCCESS } from "../constants/alerts"

export default function alertReducer(state = {}, action) {
  switch (action.type) {
    case ALERT_SUCCESS: {
      return {
        // used as <div className="alert-success" />
        // TODO: create CSS classes for each alert type
        type: "alert-success",
        message: action.message,
      }
    }

    case ALERT_ERROR: {
      return {
        type: "alert-error",
        message: action.message,
      }
    }

    case ALERT_CLEAR:
      return {}

    default:
      return state
  }
}
