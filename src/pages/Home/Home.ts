import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { en } from 'langs'
import { routerPathes } from 'router'
import { colorsConfig } from 'variables/css'

export const Home = () => {
  const title = Text({
    tagName: 'h1',
    classname: 'text-center text-4xl',
    children: en.homePage.title,
    textTransform: 'uppercase',
    weight: 900,
  })

  const subTitle = Text({
    tagName: 'h3',
    children: en.homePage.subTitle,
    textTransform: 'uppercase',
    classname: 'text-center text-sm',
  })

  const titleWrapper = createElementWithClassNameAndAppendNode({ tagName: 'div', children: [title, subTitle] })
  const loginLink = Link({
    children: en.button.login,
    href: routerPathes.signIn,
    appearance: 'button',
    appearanceButtonColor: 'primary',
    textTransform: 'uppercase',
  })

  const quote = Text({
    tagName: 'p',
    children: en.homePage.quote,
    classname: 'text-base text-center',
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `${colorsConfig.text.darkGray} flex justify-center items-center h-full flex-col gap-10`,
    children: [titleWrapper, loginLink, quote],
  })

  return wrapper
}
