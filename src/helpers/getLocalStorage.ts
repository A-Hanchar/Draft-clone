export const getLocalStorage = (key: string): boolean => {
  if (localStorage.getItem(key)) {
    const data = String(localStorage.getItem(key))
    return Boolean(JSON.parse(data))
  }
  sessionStorage.setItem(key, JSON.stringify(false))
  return false
}
