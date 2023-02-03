import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { routerPathes } from 'router'

export const NotFound = () =>
  createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [
      Text({ tagName: 'h1', innerText: 'Error: 404', classname: 'text-9xl', weight: 900 }),
      Text({ tagName: 'h2', innerText: 'Page Not Fount', classname: 'text-6xl', weight: 700 }),
      Link({ href: routerPathes.home, children: 'Go Home' }),
    ],
    classname: 'flex flex-col justify-center items-center h-full',
  })
