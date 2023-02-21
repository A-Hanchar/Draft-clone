import { type KEYS } from 'enums'

export type ToggleSwitchProps = {
  name?: string
  key: KEYS
  onclick?: () => void
}
