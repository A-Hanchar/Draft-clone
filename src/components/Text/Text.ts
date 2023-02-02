import { createElementWithClassName } from 'helpers'
import { fontWeights } from 'variables/css'

import { type TextProps } from './types'

export const Text = <K extends 'h1' | 'h2' | 'h3' | 'p' | 'span'>({
  tagName,
  classname = '',
  innerText,
  textTransform = 'normal-case',
  weight = 400,
}: TextProps<K>) => {
  const element = createElementWithClassName({
    tagName,
    classname: `${classname} ${textTransform} ${fontWeights[weight]}`,
  })

  element.innerText = innerText

  return element
}
