import { useState, useEffect } from 'react'

export function useLocalStorage(key, value = '') {
  const [state, setState] = useState(() => {
    //checks if there is a item in the localstorage with this key if not, it replaces it with the value given
    return window.localStorage.getItem(key) || value
  })
  //set the localstorage value through the setState()
  useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])
  return [state, setState]
}
