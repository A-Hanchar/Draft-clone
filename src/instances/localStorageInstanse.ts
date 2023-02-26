/* eslint-disable class-methods-use-this */
import { LANGUAGE } from 'i18n'

import { LOCAL_STORAGE_KEY } from './types'

class LocaltorageInstanse {
  getValue<T = string>(key: LOCAL_STORAGE_KEY): T | null {
    const item = localStorage.getItem(key)

    if (item) {
      if (typeof item !== 'string') {
        return JSON.parse(item) as T
      }

      return item as T
    }

    return null
  }

  setLanguage(langValue: LANGUAGE) {
    localStorage.setItem(LOCAL_STORAGE_KEY.LANGUAGE, langValue)
  }

  getLanguage() {
    return this.getValue<LANGUAGE>(LOCAL_STORAGE_KEY.LANGUAGE) ?? LANGUAGE.EN
  }
}

export const localStorageInstanse = new LocaltorageInstanse()
