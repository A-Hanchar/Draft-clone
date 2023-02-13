import { createElementWithClassNameAndAppendNode } from 'helpers'
import { colorsConfig, fontWeights, textTransformConfig } from 'variables/css'

import { type TextProps } from './types'

export const Text = <K extends 'h1' | 'h2' | 'h3' | 'p' | 'span'>({
  tagName,
  classname = '',
  children,
  textTransform = 'none',
  weight = 400,
  color = 'darkGray',
}: TextProps<K>) => {
  const element = createElementWithClassNameAndAppendNode({
    tagName,
    children,
    classname: `${classname} ${textTransformConfig[textTransform]} ${fontWeights[weight]} ${colorsConfig.text[color]}`,
  })

  return element
}
