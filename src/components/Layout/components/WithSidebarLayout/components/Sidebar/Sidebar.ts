import { createElementWithClassNameAndAppendNode } from 'helpers'

import { CreateDocument } from './components/CreateDocument'
import { Navigation } from './components/Navigation'
import { Title } from './components/Title'
import { type SidebarProps } from './types'

export const Sidebar = ({ classname }: SidebarProps) => {
  const titleWithNavigation = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [Title(), Navigation()],
  })

  const aside = createElementWithClassNameAndAppendNode({
    tagName: 'aside',
    children: [titleWithNavigation, CreateDocument()],
    classname: `flex flex-col gap-6 ${classname ?? ''}`,
  })

  return aside
}
