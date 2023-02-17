import homeIcon from 'assets/icons/png/Home.png'
import { Image } from 'components/Image'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

export const Title = () => {
  const title = Text({ tagName: 'h2', children: 'Draft', weight: 700 })
  const iconHome = Image({ alt: 'Draft Icon', url: homeIcon, classname: 'w-6 h-6' })

  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [iconHome, title],
    classname: 'flex items-center gap-1.5',
  })
}
