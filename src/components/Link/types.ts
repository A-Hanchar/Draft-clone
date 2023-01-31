import { type PropsWithChildren } from 'types'

export type LinkProps = PropsWithChildren<{
  href: string
  classname?: string
  target?: '_blank' | '_self' | '_top' | 'framename'
}>
