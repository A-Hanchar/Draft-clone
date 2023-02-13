import { type ChildrenNode } from 'types'
import { type ColorBackgroundKeys } from 'variables/css'

export type FormProps = {
  classname?: string
  children?: ChildrenNode | Array<ChildrenNode | undefined>
  bgColor?: ColorBackgroundKeys
  onSubmit?: () => void
}
