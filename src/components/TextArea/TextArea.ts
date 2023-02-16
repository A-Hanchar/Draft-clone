import { createElementWithClassName } from 'helpers'
import { colorsConfig, fontWeights } from 'variables/css'

import { type TextAreaProps } from './types'

export const TextArea = ({ classname = '', innerText, weight = 400, color = 'darkGray' }: TextAreaProps) => {
  const element = createElementWithClassName({
    tagName: 'textarea',
    classname: `${classname} ${fontWeights[weight]} ${colorsConfig.text[color]}`,
  })

  element.innerText = innerText || ''

  return element
}
