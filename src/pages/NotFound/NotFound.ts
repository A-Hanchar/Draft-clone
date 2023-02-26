import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { t } from 'i18n'
import { routerPathes } from 'router'

export const NotFound = () =>
  createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [
      Text({
        tagName: 'h1',
        children: t('notFoundPage.error404'),
        classname: 'text-9xl m-0 md:text-7xl sm:text-6xl',
        weight: 900,
      }),
      Text({ tagName: 'h2', children: t('notFoundPage.notFound'), classname: 'text-6xl sm:text-4xl', weight: 700 }),
      Link({
        href: routerPathes.home,
        children: t('button.goHome'),
        appearance: 'button',
        appearanceButtonColor: 'success',
        classname: 'text-xl min-w-[15.625rem] flex justify-center',
        weight: 600,
      }),
    ],
    classname: 'flex flex-col justify-center items-center gap-6 min-h-screen',
  })
