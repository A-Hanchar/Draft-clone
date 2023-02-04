import { type PropsWithChildren } from 'types'
import { type ButtonColorType } from 'variables/css'

export type ButtonProps = PropsWithChildren<{
  classname?: string
  color?: ButtonColorType
  onclick?: () => void
  type?: string
  disabled?: boolean
  innerText?: string
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
}>
