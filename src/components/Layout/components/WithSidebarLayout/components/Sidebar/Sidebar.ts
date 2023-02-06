import { createElementWithClassNameAndAppendNode } from 'helpers'

import { CreateDocument } from './components/CreateDocument'
import { Navigation } from './components/Navigation'
import { Title } from './components/Title'
import { type SidebarProps } from './types'

export const Sidebar = ({ classname }: SidebarProps) => {
  const aside = createElementWithClassNameAndAppendNode({
    tagName: 'aside',
    children: [Title(), Navigation(), CreateDocument()],
    classname,
  })

  return aside
}
