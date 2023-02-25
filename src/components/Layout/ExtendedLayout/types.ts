import { type PropsWithChildren } from 'types'

export type ExtendedLayoutProps = { withHeader?: boolean; withFooter?: boolean }

export type ExtendedLayoutOwnProps = PropsWithChildren<
  ExtendedLayoutProps & {
    mainNodeProps?: {
      classname?: string
    }
    bodyNodeProps?: {
      classname?: string
    }
  }
>
