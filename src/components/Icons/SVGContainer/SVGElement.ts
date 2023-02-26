import { getTruthyClasses } from 'helpers'

import { converterPxToRem } from 'utils/converterPxToRem'
import { FillConfig } from 'variables/css/SVG/fillSVG'

import { initialHeight, initialViewBox, initialWidth, linkW3OrgSVG } from './constants'
import { type SVGElementProps } from './type'

export const SVGElement = ({
  fill = FillConfig.light.black,
  height = initialHeight,
  width = initialWidth,
  viewBox = initialViewBox,
  stroke,
  classname,
}: SVGElementProps) => {
  const iconSvg = document.createElementNS(linkW3OrgSVG, 'svg')

  iconSvg.setAttribute('viewBox', viewBox)
  iconSvg.setAttribute('width', converterPxToRem(width))
  iconSvg.setAttribute('height', converterPxToRem(height))

  iconSvg.setAttribute('class', getTruthyClasses([fill, stroke, classname]))

  return iconSvg
}
