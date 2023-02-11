import { createElementWithClassNameAndAppendNode } from 'helpers'

import { Google } from './components/Google'

export const LoginMethods = () =>
  createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: Google(),
  })
