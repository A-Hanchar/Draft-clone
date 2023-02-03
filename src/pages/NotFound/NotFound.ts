import { Link } from 'components/Link'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { routerPathes } from 'router'

export const NotFound = () => {
  const title = createElementWithClassNameAndAppendNode({ tagName: 'h1', children: '404' })
  const additionalText = createElementWithClassNameAndAppendNode({ tagName: 'h2', children: 'Page Not Fount' })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [title, additionalText, Link({ href: routerPathes.home, children: 'Go Home' })],
    classname: ['flex', 'flex-col', 'justify-center', 'items-center', 'h-full'],
  })

  return wrapper
}
