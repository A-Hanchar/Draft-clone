import { type TextTransform, type FontWeightKeys, type ColorTextKeys } from 'variables/css'

export type TextProps<K extends keyof HTMLElementTagNameMap> = {
  tagName: K
  classname?: string
  innerText: string
  textTransform?: TextTransform
  weight?: FontWeightKeys
  color?: ColorTextKeys
}
