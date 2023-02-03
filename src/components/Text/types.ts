import { type FontWeightKeys } from 'variables/css'

export type TextProps<K extends keyof HTMLElementTagNameMap> = {
  tagName: K
  classname?: string
  innerText: string
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
  weight?: FontWeightKeys
}
