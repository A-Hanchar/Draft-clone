import { type PropsWithChildren } from 'types'

export type ButtonProps = PropsWithChildren<{
  classname?: string
  color: 'primary' | 'alert' | 'success'
  onclick?: () => void
  type?: string
  disabled?: boolean
}>
