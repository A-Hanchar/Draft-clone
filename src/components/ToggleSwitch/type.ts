import { type KEYS } from 'enums'

export type KYELocalStorage = KEYS

export type ToggleSwitchProps = {
  name?: string
  keyLocalStorage: KYELocalStorage
  onclick?: () => void
}
