import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { t } from 'i18n'
import { routerPathes } from 'router'
import { colorsConfig } from 'variables/css'

export const Home = () => {
  const title = Text({
    tagName: 'h1',
    classname: 'text-center text-4xl',
    textTransform: 'uppercase',
    weight: 900,
    children: t('homePage.title'),
  })

  const subTitle = Text({
    tagName: 'h3',
    textTransform: 'uppercase',
    classname: 'text-center text-sm',
    children: t('homePage.subTitle'),
  })

  const titleWrapper = createElementWithClassNameAndAppendNode({ tagName: 'div', children: [title, subTitle] })

  const loginLink = Link({
    href: routerPathes.signIn,
    appearance: 'button',
    appearanceButtonColor: 'primary',
    textTransform: 'uppercase',
    children: t('button.login'),
  })

  const quote = Text({
    tagName: 'p',
    classname: 'text-base text-center',
    children: t('homePage.quote'),
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `${colorsConfig.text.darkGray} flex justify-center items-center h-full flex-col gap-10`,
    children: [titleWrapper, loginLink, quote],
  })

  return wrapper
}
