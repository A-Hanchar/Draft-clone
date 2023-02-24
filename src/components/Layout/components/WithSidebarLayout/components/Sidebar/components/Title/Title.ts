import { Home } from 'components/Icons/Home'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

export const Title = () => {
  const title = Text({ tagName: 'h2', children: 'Draft', weight: 700 })
  const iconHome = Home({})

  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [iconHome, title],
    classname: 'flex items-center gap-1.5',
  })
}
