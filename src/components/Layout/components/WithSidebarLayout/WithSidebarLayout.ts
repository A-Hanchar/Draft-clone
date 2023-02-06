import { Body } from 'components/Body'
import { Footer } from 'components/Footer'
import { addClassnameToElement, createElementWithClassNameAndAppendNode } from 'helpers'
import { type PropsWithChildren } from 'types'
import { colorsConfig } from 'variables/css'

import { Sidebar } from './components/Sidebar'

import styles from './styles.module.css'

export const WithSidebarLayout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = createElementWithClassNameAndAppendNode({
    tagName: 'main',
    children,
    classname: `p-4 ${styles.main ?? ''}`,
  })

  addClassnameToElement({
    element: Body,
    classname: `grid grid-rows-[1fr_auto] grid-cols-[15rem_1fr] min-h-screen ${colorsConfig.bg.lightGray} ${
      styles.body ?? ''
    }`,
  })

  fragment.append(Sidebar({ classname: styles.sidebar }), main, Footer({ classname: styles.footer }))

  return fragment
}
