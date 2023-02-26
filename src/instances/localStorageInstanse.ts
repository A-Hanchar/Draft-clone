/* eslint-disable class-methods-use-this */
import { LANGUAGE } from 'i18n'
import { THEME_COLOR_MODE } from 'variables/css'

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

  setThemeColorMode(colorMode: THEME_COLOR_MODE) {
    localStorage.setItem(LOCAL_STORAGE_KEY.THEME_COLOR_MODE, colorMode)
  }

  getThemeColorMode() {
    return this.getValue<THEME_COLOR_MODE>(LOCAL_STORAGE_KEY.THEME_COLOR_MODE) ?? THEME_COLOR_MODE.LIGHT
  }
}

export const localStorageInstanse = new LocaltorageInstanse()
