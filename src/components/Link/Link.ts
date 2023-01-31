import { renderComponent } from 'router'

import { type LinkProps } from './types'

export const Link = ({ children, href, classname, target = '_self' }: LinkProps) => {
  const a = document.createElement('a')

  classname && a.classList.add(classname)
  children && a.append(children)

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
