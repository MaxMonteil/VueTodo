import idb from 'idb'

const dbPromise = _ => {
  'use strict'

  if (!('indexedDB' in window)) {
    throw new Error('Browser does not support IndexedDB')
  }

  return idb.open('VueTodoDB', 1, upgradeDb => {
    if (!upgradeDb.objectStoreNames.contains('todos')) {
      const todos = upgradeDb.createObjectStore('todos', { autoIncrement: true })

      todos.createIndex('todo', 'todo', { unique: false })
    }

    if (!upgradeDb.objectStoreNames.contains('completed')) {
      const completed = upgradeDb.createObjectStore('completed', { autoIncrement: true })

      completed.createIndex('todo', 'todo', { unique: false })
    }
  })
}

export const checkStorage = async storeName => {
  dbPromise
    .then(db => {
      const tx = db.transaction(storeName, 'readonly')
      const store = tx.objectStore(storeName)

      return store.get(storeName)
    })
    .catch(error => {
      return error
    })
}

export const saveToStorage = async (storeName, tasks) => {
  dbPromise
    .then(db => {
      const tx = db.transaction(storeName, 'readwrite')
      const store = tx.objectStore(storeName)

      store.put(tasks, storeName)

      return tx.complete
    })
    .catch(error => {
      return error
    })
}
