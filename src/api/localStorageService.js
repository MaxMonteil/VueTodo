const checkStorage = key => {
  if (localStorage.getItem(key)) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
      localStorage.removeItem(key)
      throw e
    }
  }
}

const saveToStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export {
  checkStorage,
  saveToStorage
}
