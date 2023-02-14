import { getTruthyClasses } from 'helpers'
import { buttonConfig, type FontWeightKeys, fontWeights, type TextTransform, textTransformConfig } from 'variables/css'

import { type ButtonAppearanceProps } from './types'

export const useGetButtonClasses = ({
  weight,
  rounded = true,
  textTransform,
  classname,
  ...restProps
}: {
  weight?: FontWeightKeys
  rounded?: boolean
  textTransform?: TextTransform
  classname?: string
} & ButtonAppearanceProps) => {
  const classes = [
    weight && fontWeights[weight],
    rounded && 'rounded',
    textTransform && textTransformConfig[textTransform],
    classname,
  ]

  if (restProps.appearanceType) {
    const { appearanceType } = restProps
    const isCloseButtonType = appearanceType === 'close'
    const isNoneButtonType = appearanceType === 'none'

    if (!(isCloseButtonType || isNoneButtonType)) {
      classes.push(`py-1 px-3 rounded ${buttonConfig.getClassByColorType({ colorType: appearanceType })}`)
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
