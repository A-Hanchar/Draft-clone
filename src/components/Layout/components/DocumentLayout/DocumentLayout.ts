import { Body } from 'components/Body'
import { createElementWithClassNameAndAppendNode, replaceAllClassnameToElement } from 'helpers'
import { type PropsWithChildren } from 'types'
import { colorsConfig } from 'variables/css'

export const DocumentLayout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = createElementWithClassNameAndAppendNode({
    tagName: 'main',
    children,
  })

  replaceAllClassnameToElement({
    element: Body,
    classname: colorsConfig.bg.lightGray,
  })

  fragment.append(main)

  return fragment
}
