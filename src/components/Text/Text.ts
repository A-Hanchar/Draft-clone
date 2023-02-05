import { createElementWithClassName } from 'helpers'
import { fontWeights, textTransformConfig } from 'variables/css'

import { type TextProps } from './types'

export const Text = <K extends 'h1' | 'h2' | 'h3' | 'p' | 'span'>({
  tagName,
  classname = '',
  innerText,
  textTransform = 'none',
  weight = 400,
}: TextProps<K>) => {
  const element = createElementWithClassName({
    tagName,
    classname: `${classname} ${textTransformConfig[textTransform]} ${fontWeights[weight]}`,
  })

  element.innerText = innerText

  return element
}
