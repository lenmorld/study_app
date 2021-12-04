export default function authReducer(state = { blah: "hello" }, action) {
  console.log("reducer -> blah auth action: ", action)

  switch (action.type) {
    case "BLAH_SAMPLE":
      return {
        ...state,
        blah: action.payload,
      }

    default:
      return state
  }
}
