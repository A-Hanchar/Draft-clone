import { type PropsWithChildren } from 'types'

export type ButtonProps = PropsWithChildren<{
  classname?: string | Array<string | undefined>
  onclick?: () => void
  type?: string
  disabled?: boolean
}>
