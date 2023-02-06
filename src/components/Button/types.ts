import { type PropsWithChildren } from 'types'
import {
  type TextTransform,
  type ButtonTypeClose,
  type ButtonTypePositionClose,
  type ButtonTextColor,
  type ButtonTypeGeneral,
  type FontWeightKeys,
} from 'variables/css'

export type ButtonAppearanceProps =
  | {
      appearanceType: ButtonTypeClose
      closeButtonPosition: ButtonTypePositionClose
      color?: ButtonTextColor
    }
  | {
      appearanceType?: ButtonTypeGeneral
    }
  | {
      appearanceType: 'none'
      color?: ButtonTextColor
    }

export type ButtonProps = PropsWithChildren<
  {
    classname?: string
    onclick?: () => void
    type?: string
    disabled?: boolean
    textTransform?: TextTransform
    rounded?: boolean
    weight?: FontWeightKeys
  } & ButtonAppearanceProps
>
