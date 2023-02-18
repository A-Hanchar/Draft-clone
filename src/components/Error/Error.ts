import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type ErrorProps } from './types'

export const Error = ({ error, classname }: ErrorProps) =>
  createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname,
    children: [typeof error === 'string' ? error : 'undefined error'],
  })
