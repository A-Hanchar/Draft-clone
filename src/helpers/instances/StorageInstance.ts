/* eslint-disable class-methods-use-this */

import { KEYS } from 'enums'

type Theme = 'dark' | 'light'

export class StorageInstance {
  getData<T = string>(key: string): T {
    const data = localStorage.getItem(key) || ''
    try {
      return JSON.parse(data) as T
    } catch {
      return data as T
    }
  }

  removeData(key: string) {
    localStorage.removeItem(key)
  }

  setTheme(value: Theme) {
    localStorage.setItem(KEYS.DARK, value)
  }

  getTheme() {
    return this.getData<Theme>(KEYS.DARK)
  }
}

export const darkInstance = new StorageInstance()
