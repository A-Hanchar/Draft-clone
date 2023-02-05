import { type PropsWithChildren } from 'types'
import {
  type TextTransform,
  type ButtonTypeClose,
  type ButtonTypePositionClose,
  type ButtonTypeCloseColor,
  type ButtonTypeGeneral,
  type FontWeightKeys,
} from 'variables/css'

export type ButtonProps = PropsWithChildren<
  {
    classname?: string
    onclick?: () => void
    type?: string
    disabled?: boolean
    textTransform?: TextTransform
    rounded?: boolean
    weight?: FontWeightKeys
  } & (
    | {
        appearanceType: ButtonTypeClose
        closeButtonPosition: ButtonTypePositionClose
        closeButtonColor: ButtonTypeCloseColor
      }
    | {
        appearanceType?: ButtonTypeGeneral
      }
  )
>
