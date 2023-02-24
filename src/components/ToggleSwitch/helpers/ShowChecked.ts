import { KEYS } from 'enums'

import { type KYELocalStorage } from '../type'

export const ShowChecked = (keyLocalStorage: KYELocalStorage): boolean => {
  let checked = false

  switch (keyLocalStorage) {
    case KEYS.DARK:
      checked = document.documentElement.classList.contains(keyLocalStorage)
      break

    default:
      checked = false
      break
  }

  return checked
}
