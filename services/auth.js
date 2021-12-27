export function isUserLoggedIn() {
  return (
    typeof window !== "undefined" &&
    window.localStorage.getItem("userLoggedIn") === "true"
  )
}

export function logout() {
  return (
    typeof window !== "undefined" &&
    window.localStorage.removeItem("userLoggedIn")
  )
}

/*
  TODO: listen to next/router events
  so that when change route, clear alerts
*/

export async function login(username, password) {
  // TODO: call API route/service to login
  if (username === "lenny" && password === "abcd12345") {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("userLoggedIn", "true")
    }

    return {
      auth: true,
      // user payload -> store in Redux
      name: "Lenny",
      email: "lenmorld@gmail.com",
      level: 2,
      tags: ["js"],
    }
  }

  return {
    auth: false,
    message: "Login failed: incorrect username or password",
  }
}
