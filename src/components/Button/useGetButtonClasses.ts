import { getTruthyClasses } from 'helpers'
import { buttonConfig, type FontWeightKeys, fontWeights, type TextTransform, textTransformConfig } from 'variables/css'

import { type ButtonAppearanceProps } from './types'

export const useGetButtonClasses = ({
  weight,
  rounded = true,
  textTransform,
  disabled,
  classname,
  ...restProps
}: {
  weight?: FontWeightKeys
  rounded?: boolean
  textTransform?: TextTransform
  disabled?: boolean
  classname?: string
} & ButtonAppearanceProps) => {
  const classes = [
    buttonConfig.commonStyles,
    weight && fontWeights[weight],
    rounded && 'rounded',
    textTransform && textTransformConfig[textTransform],
    disabled && 'opacity-50 cursor-not-allowed',
    classname,
  ]

  if (restProps.appearanceType) {
    const { appearanceType } = restProps
    const isCloseButtonType = appearanceType === 'close'
    const isNoneButtonType = appearanceType === 'none'

    if (!(isCloseButtonType || isNoneButtonType)) {
      classes.push(`py-2 px-4 rounded ${buttonConfig.getClassByColorType({ colorType: appearanceType })}`)
    }

    if (isNoneButtonType) {
      const { color = 'darkGray' } = restProps

      classes.push(buttonConfig.color[color])
    }

    if (isCloseButtonType) {
      const { closeButtonPosition, color = 'red' } = restProps

      classes.push(buttonConfig.getClassesForCloseButton({ color, position: closeButtonPosition }))
    }
  }

  return getTruthyClasses(classes)
}
