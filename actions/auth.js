import { authUser } from '../services/auth'

export const blahSample = (message) => {
    return { type: "BLAH_SAMPLE", payload: message }
}


// thunk
export const blahThunk = (message) => (dispatch) => {
    // simulate network call
    // use service after
    setTimeout(() => {
        dispatch({ type: "BLAH_SAMPLE", payload: "thunk async yeah: " + message  })
    }, 3000);
}