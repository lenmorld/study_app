export function isUserLoggedIn() {
  return (
    typeof window !== "undefined" &&
    window.localStorage.getItem("userLoggedIn") === "true"
  )
}
