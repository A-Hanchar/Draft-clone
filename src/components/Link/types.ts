import { type PropsWithChildren } from 'types'
import { type ButtonColorType, type FontWeightKeys } from 'variables/css'

export type LinkProps = PropsWithChildren<
  {
    href: string
    classname?: string
    target?: '_blank' | '_self' | '_top' | 'framename'
    weight?: FontWeightKeys
  } & (
    | {
        type: 'button'
        color?: ButtonColorType
      }
    | {
        type?: 'custom'
      }
  )
>
