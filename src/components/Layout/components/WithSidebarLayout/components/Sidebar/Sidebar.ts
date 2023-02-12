import { createElementWithClassNameAndAppendNode } from 'helpers'

import { CreateDocumentButton } from './components/CreateDocumentButton'
import { Navigation } from './components/Navigation'
import { Title } from './components/Title'

export const Sidebar = () => {
  const titleWithNavigation = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [Title(), Navigation()],
  })

  const aside = createElementWithClassNameAndAppendNode({
    tagName: 'aside',
    children: [titleWithNavigation, CreateDocumentButton()],
    classname: 'flex flex-col gap-6 basis-96 md:basis-auto',
  })

  return aside
}
