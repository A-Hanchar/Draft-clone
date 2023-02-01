import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { type PropsWithChildren } from 'types'

export const Layout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = createElementWithClassNameAndAppendNode({ tagName: 'main', children })

  fragment.append(Header(), main, Footer())

  return fragment
}
