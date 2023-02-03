import { Body } from 'components/Body'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { addClassnameToElement, createElementWithClassNameAndAppendNode } from 'helpers'
import { type PropsWithChildren } from 'types'
import { colors } from 'variables/css'

export const Layout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = createElementWithClassNameAndAppendNode({
    tagName: 'main',
    children,
  })

  addClassnameToElement({
    element: Body,
    classname: `grid grid-rows-[auto_1fr_auto] min-h-screen bg-${colors.lightGray}`,
  })

  fragment.append(Header(), main, Footer())

  return fragment
}
