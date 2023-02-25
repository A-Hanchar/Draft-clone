import { Home } from 'components/Icons/Home'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { en } from 'langs'

export const Title = () => {
  const iconHome = Home({})
  const title = Text({ tagName: 'h2', children: en.draft, weight: 700 })
  // const iconHome = Image({ alt: en.draftIcon, url: homeIcon, classname: 'w-6 h-6' })

  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [iconHome, title],
    classname: 'flex items-center gap-1.5',
  })
}
