import { createElementWithClassNameAndAppendNode } from 'helpers'
import { renderComponent } from 'router'
import { buttonClassesByColorType, fontWeights } from 'variables/css'

import { type LinkProps } from './types'

export const Link = ({ children, href, classname = '', target = '_self', weight = 400, ...restProps }: LinkProps) => {
  const { type } = restProps
  const commonClasses = `${fontWeights[weight]} ${classname}`

  let linkCssClass = commonClasses

  if (type === 'button') {
    const { color = 'primary' } = restProps

    linkCssClass = `p-3.5 rounded ${buttonClassesByColorType[color]} ${classname}`
  }

  const a = createElementWithClassNameAndAppendNode({ tagName: 'a', classname: linkCssClass, children })

  a.href = href
  a.target = target

  const handleLinkClick = (event: MouseEvent) => {
    if (target === '_blank') {
      return
    }

    event.preventDefault()

    window.history.pushState({}, '', href)
    renderComponent()
  }

  a.addEventListener('click', handleLinkClick)

  return a
}
