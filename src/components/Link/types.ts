import { type PropsWithChildren } from 'types'
import { type TextTransform, type FontWeightKeys, type ButtonTypeGeneral } from 'variables/css'

export type LinkProps = PropsWithChildren<
  {
    href: string
    classname?: string
    target?: '_blank' | '_self' | '_top' | 'framename'
    weight?: FontWeightKeys
    textTransform?: TextTransform
  } & (
    | {
        appearance: 'button'
        color: ButtonTypeGeneral
      }
    | {
        appearance?: 'link'
      }
  )
>
