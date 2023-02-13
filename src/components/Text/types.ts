import { type ChildrenNode, type Falsy } from 'types'
import { type TextTransform, type FontWeightKeys, type ColorTextKeys } from 'variables/css'

export type TextProps<K extends keyof HTMLElementTagNameMap> = {
  children?: ChildrenNode | Array<ChildrenNode | Falsy>
  tagName: K
  classname?: string
  textTransform?: TextTransform
  weight?: FontWeightKeys
  color?: ColorTextKeys
}
