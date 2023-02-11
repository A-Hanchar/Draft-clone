import { addClassnameToElement, createElementWithClassNameAndAppendNode } from 'helpers'
import { renderComponent } from 'router'
import { fontWeights, buttonConfig, textTransformConfig, colorsConfig } from 'variables/css'

import { type LinkProps } from './types'

export const Link = ({
  children,
  href,
  classname = '',
  target = '_self',
  weight = 400,
  textTransform = 'none',
  rounded = true,
  ...restProps
}: LinkProps) => {
  const a = createElementWithClassNameAndAppendNode({
    tagName: 'a',
    classname: `${fontWeights[weight]} ${textTransformConfig[textTransform]} ${classname}`,
    children,
  })

  a.href = href
  a.target = target

  if (rounded) {
    addClassnameToElement({
      element: a,
      classname: 'rounded',
    })
  }

  if (restProps.appearance === 'button') {
    const { appearanceButtonColor: colorType } = restProps

    addClassnameToElement({
      element: a,
      classname: `py-2 px-4 rounded ${buttonConfig.commonStyles} ${buttonConfig.getClassByColorType({ colorType })}`,
    })
  } else {
    const { color = 'darkGray' } = restProps

    addClassnameToElement({
      element: a,
      classname: colorsConfig.text[color],
    })
  }

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
