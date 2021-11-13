export function isUserLoggedIn() {
  return (
    typeof window !== "undefined" &&
    window.localStorage.getItem("userLoggedIn") === "true"
  )
}

/*
  TODO: listen to next/router events
  so that when change route, clear alerts
*/

export async function authUser(username, password) {
  // TODO: call API route/service to login
  if (username === "lenny" && password === "abcd1234") {
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
  }
}
