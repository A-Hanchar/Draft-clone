import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { type PropsWithClassname } from 'types'

import { CreateDocumentButton } from './components/CreateDocumentButton'
import { Navigation } from './components/Navigation'

export const Sidebar = ({ classname }: PropsWithClassname) => {
  const titleWithNavigation = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: Navigation(),
  })

  const aside = createElementWithClassNameAndAppendNode({
    tagName: 'aside',
    children: [titleWithNavigation, CreateDocumentButton()],
    classname: getTruthyClasses(['flex flex-col gap-6', classname]),
  })

  return aside
}
