import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { colorsConfig, fontWeights } from 'variables/css'

import { type FormLabelWrapperProps } from './types'

export const FormLabelWrapper = ({
  children,
  labelText,
  labelClassname,
  type = 'column',
  weight = 400,
  color = 'darkGray',
}: FormLabelWrapperProps) => {
  const labelElement = createElementWithClassNameAndAppendNode({
    tagName: 'label',
    classname: getTruthyClasses([
      'flex',
      type === 'row' ? 'flex-row' : 'flex-col',
      'gap-3',
      'text-sm',
      fontWeights[weight],
      colorsConfig.text[color],
      labelClassname,
    ]),
    children: [labelText, children],
  })

  return { labelElement, input: children }
}
