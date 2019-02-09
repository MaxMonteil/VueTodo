const checkStorage = key => {
  if (window.localStorage.getItem(key)) {
    try {
      return JSON.parse(window.localStorage.getItem(key))
    } catch (e) {
      window.localStorage.removeItem(key)
      throw e
    }
  } else {
    return null
  }
}

const saveToStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export default {
  checkStorage,
  saveToStorage
}
