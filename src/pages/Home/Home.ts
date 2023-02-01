import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { colors } from 'variables/css'

export const Home = () => {
  const title = Text({
    tagName: 'h1',
    classname: 'text-7xl',
    innerText: 'Write better with drafter',
    textTransform: 'uppercase',
    weight: 900,
  })
  const subTitle = Text({ tagName: 'h3', innerText: "Simple Writer's tool", textTransform: 'uppercase' })
  const titleWrapper = createElementWithClassNameAndAppendNode({ tagName: 'div', children: [title, subTitle] })
  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `text-${colors.darkgray} flex justify-center items-center`,
    children: [titleWrapper],
  })
  return wrapper
}
