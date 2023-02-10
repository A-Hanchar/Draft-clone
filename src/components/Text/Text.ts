import { createElementWithClassName } from 'helpers'
import { colorsConfig, fontWeights, textTransformConfig } from 'variables/css'

import { type TextProps } from './types'

export const Text = <K extends 'h1' | 'h2' | 'h3' | 'p' | 'span'>({
  tagName,
  classname = '',
  innerText,
  textTransform = 'none',
  weight = 400,
  color = 'darkGray',
}: TextProps<K>) => {
  const element = createElementWithClassName({
    tagName,
    classname: `${classname} ${textTransformConfig[textTransform]} ${fontWeights[weight]} ${colorsConfig.text[color]}`,
  })

  element.innerText = innerText

  return element
}
