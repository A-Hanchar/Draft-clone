import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'

import { CreateDocumentButton } from './components/CreateDocumentButton'
import { Navigation } from './components/Navigation'
import { Title } from './components/Title'

import styles from './styles.module.css'

export const Sidebar = () => {
  const titleWithNavigation = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [Title(), Navigation()],
  })

  const aside = createElementWithClassNameAndAppendNode({
    tagName: 'aside',
    children: [titleWithNavigation, CreateDocumentButton()],
    classname: getTruthyClasses(['flex', 'flex-col', 'gap-6', styles.sidebar]),
  })

  return aside
}
