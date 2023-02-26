import { Body } from 'components/Body'
import { createElementWithClassNameAndAppendNode, replaceAllClassnameToElement } from 'helpers'
import { type PropsWithChildren } from 'types'
import { colorsConfig } from 'variables/css'

export const RootLayout = ({ children }: PropsWithChildren) => {
  const main = createElementWithClassNameAndAppendNode({
    tagName: 'main',
    children,
  })

  replaceAllClassnameToElement({
    element: Body,
    classname: colorsConfig.bg.lightGray,
  })

  return main
}
