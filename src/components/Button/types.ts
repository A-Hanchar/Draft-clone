import { type PropsWithChildren } from 'types'

export type ButtonProps = PropsWithChildren<{
  classname?: string
  color: 'primary' | 'alert' | 'success'
  textcontent?: string
  onclick?: () => void
  type?: string
  disabled?: boolean
}>
