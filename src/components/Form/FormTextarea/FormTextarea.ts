import { createElementWithClassName, getTruthyClasses } from 'helpers'
import { colorsConfig, fontWeights } from 'variables/css'

import { type FormTextareaProps } from './types'

export const FormTextarea = ({ classname, innerText, weight = 400, color = 'darkGray' }: FormTextareaProps) => {
  const element = createElementWithClassName({
    tagName: 'textarea',
    classname: getTruthyClasses([classname, fontWeights[weight], colorsConfig.text[color]]),
  })

  element.innerText = innerText || ''

  return element
}
