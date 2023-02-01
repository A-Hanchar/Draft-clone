import { Body } from 'components/Body'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { type PropsWithChildren } from 'types'
import { colors } from 'variables/css'

export const Layout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = createElementWithClassNameAndAppendNode({ tagName: 'main', children })

  Body.classList.add(`bg-${colors.lightgray}`)

  fragment.append(Header(), main, Footer())

  return fragment
}
