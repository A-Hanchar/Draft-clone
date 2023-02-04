import { type PropsWithChildren } from 'types'
import { type TextTransform, type ButtonColorType, type FontWeightKeys } from 'variables/css'

export type LinkProps = PropsWithChildren<
  {
    href: string
    classname?: string
    target?: '_blank' | '_self' | '_top' | 'framename'
    weight?: FontWeightKeys
    textTransform?: TextTransform
  } & (
    | {
        type: 'button'
        color?: ButtonColorType
      }
    | {
        type?: undefined
      }
  )
>
