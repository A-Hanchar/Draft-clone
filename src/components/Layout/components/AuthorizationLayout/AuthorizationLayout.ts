import { Body } from 'components/Body'
import { LoginMethods } from 'components/LoginMethods'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode, replaceAllClassnameToElement } from 'helpers'
import { colorsConfig } from 'variables/css'

import { type AuthorizationLayoutProps } from './types'

export const AuthorizationLayout = ({ titleText, form }: AuthorizationLayoutProps) => {
  const fragment = document.createDocumentFragment()

  replaceAllClassnameToElement({
    element: Body,
    classname: colorsConfig.bg.lightGray,
  })

  const title = Text({
    tagName: 'h1',
    classname: 'text-center text-4xl',
    innerText: titleText,
    textTransform: 'uppercase',
    weight: 900,
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `${colorsConfig.text.darkGray} flex justify-center items-center h-screen flex-col gap-10`,
    children: [title, LoginMethods(), form],
  })

  fragment.append(wrapper)

  return fragment
}
