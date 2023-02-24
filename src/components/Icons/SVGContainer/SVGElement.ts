import { addClassnameToElement } from 'helpers'

import { initialFillColor, initialHeight, initialStroke, initialViewBox, initialWidth, linkW3OrgSVG } from './constants'
import { converterPxToRem } from './converterPxToRem'
import { type SVGElementProps } from './type'

export const SVGElement = ({
  fill = initialFillColor,
  height = initialHeight,
  width = initialWidth,
  viewBox = initialViewBox,
  stroke = initialStroke,
  classname,
}: SVGElementProps) => {
  const iconSvg = document.createElementNS(linkW3OrgSVG, 'svg')

  iconSvg.setAttribute('fill', fill)
  iconSvg.setAttribute('viewBox', viewBox)
  iconSvg.setAttribute('stroke', stroke)
  iconSvg.setAttribute('width', converterPxToRem(width))
  iconSvg.setAttribute('height', converterPxToRem(height))

  addClassnameToElement({ element: iconSvg, classname })

  return iconSvg
}
