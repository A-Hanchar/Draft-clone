import {
  addClassnameToElement,
  createElementWithClassNameAndAppendNode,
  getTruthyClasses,
  goToPageAndRenderRoute,
} from 'helpers'
import { fontWeights, buttonConfig, textTransformConfig, colorsConfig } from 'variables/css'

import { type LinkProps } from './types'

export const Link = ({
  children,
  href,
  classname,
  target = '_self',
  weight = 400,
  textTransform = 'none',
  rounded = true,
  ...restProps
}: LinkProps) => {
  const a = createElementWithClassNameAndAppendNode({
    tagName: 'a',
    classname: getTruthyClasses([fontWeights[weight], textTransformConfig[textTransform], classname]),
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
    const { appearanceButtonColor: colorType, download } = restProps

    if (download) {
      a.download = download
    }

    addClassnameToElement({
      element: a,
      classname: `py-2 px-4 rounded pointer ${buttonConfig.getClassByColorType({ colorType })}`,
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

    goToPageAndRenderRoute(href)
  }

  a.addEventListener('click', handleLinkClick)

  return a
}
