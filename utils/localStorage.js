export const loadState = (key) => {
  return JSON.parse(
    (typeof window !== "undefined" && localStorage.getItem(key)) || "{}",
  )
}

export const saveState = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state))
}
