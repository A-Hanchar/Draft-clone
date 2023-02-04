import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { routerPathes } from 'router'
import { colorsConfig } from 'variables/css'

export const Home = () => {
  const title = Text({
    tagName: 'h1',
    classname: 'text-center text-4xl',
    innerText: 'Write better with drafter',
    textTransform: 'uppercase',
    weight: 900,
  })

  const subTitle = Text({
    tagName: 'h3',
    innerText: "A Simple Writer's tool",
    textTransform: 'uppercase',
    classname: 'text-center text-sm',
  })

  const titleWrapper = createElementWithClassNameAndAppendNode({ tagName: 'div', children: [title, subTitle] })
  const loginLink = Link({ children: 'LOGIN', href: routerPathes.signIn, appearance: 'button', color: 'primary' })

  const quote = Text({
    tagName: 'p',
    innerText: '"When I\'m not writing on paper, I write with drafter."',
    classname: 'text-base text-center',
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `${colorsConfig.text.darkGray} flex justify-center items-center h-screen flex-col gap-10`,
    children: [titleWrapper, loginLink, quote],
  })

  return wrapper
}
