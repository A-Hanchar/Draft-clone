import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { colorsConfig } from 'variables/css'

import { type AuthorizationLayoutProps } from './types'

export const AuthorizationLayout = ({ titleText, form }: AuthorizationLayoutProps) => {
  const fragment = document.createDocumentFragment()

  const title = Text({
    tagName: 'h1',
    classname: 'text-center text-4xl md:text-3xl',
    innerText: titleText,
    textTransform: 'uppercase',
    weight: 900,
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `${colorsConfig.text.darkGray} flex justify-center items-center h-screen flex-col gap-10`,
    children: [title, form],
  })

  fragment.append(wrapper)

  return fragment
}
