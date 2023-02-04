import { createElementWithClassNameAndAppendNode } from 'helpers'
import { renderComponent } from 'router'
import { buttonClassesByColorType, fontWeights } from 'variables/css'

import { type LinkProps } from './types'

export const Link = ({
  children,
  href,
  classname = '',
  target = '_self',
  weight = 400,
  textTransform = 'normal-case',
  ...restProps
}: LinkProps) => {
  const { type } = restProps
  const commonClasses = `${fontWeights[weight]} ${classname} ${textTransform}`

  let linkCssClass = commonClasses

  if (type === 'button') {
    const { color = 'primary' } = restProps

    linkCssClass = `p-3.5 rounded text-white min-w-[15.625rem] flex justify-center ${buttonClassesByColorType[color]} ${classname}`
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
