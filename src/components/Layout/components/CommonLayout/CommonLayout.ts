import { Body } from 'components/Body'
import { Footer } from 'components/Footer'
import { createElementWithClassNameAndAppendNode, replaceAllClassnameToElement } from 'helpers'
import { type PropsWithChildren } from 'types'
import { colorsConfig } from 'variables/css'

export const CommonLayout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = createElementWithClassNameAndAppendNode({
    tagName: 'main',
    children,
  })

  replaceAllClassnameToElement({
    element: Body,
    classname: `${colorsConfig.bg.lightGray} ${colorsConfig.bg.darkSlate}`,
  })

  fragment.append(main, Footer())

  return fragment
}
