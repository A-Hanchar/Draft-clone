import { type TextTransform, type FontWeightKeys } from 'variables/css'

export type TextProps<K extends keyof HTMLElementTagNameMap> = {
  tagName: K
  classname?: string
  innerText: string
  textTransform?: TextTransform
  weight?: FontWeightKeys
}
