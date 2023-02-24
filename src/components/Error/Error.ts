import { createElementWithClassNameAndAppendNode } from 'helpers'
import { en } from 'langs'

import { type ErrorProps } from './types'

export const Error = ({ error, classname }: ErrorProps) =>
  createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname,
    children: [typeof error === 'string' ? error : en.error.undefinedError],
  })
