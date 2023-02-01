import { Body } from 'components/Body'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { addClassnameToElement, createElementWithClassNameAndAppendNode } from 'helpers'
import { type PropsWithChildren } from 'types'

export const Layout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = createElementWithClassNameAndAppendNode({ tagName: 'main', children })

  addClassnameToElement({ element: Body, classname: 'bg-gray-100' })

  fragment.append(Header(), main, Footer())

  return fragment
}
