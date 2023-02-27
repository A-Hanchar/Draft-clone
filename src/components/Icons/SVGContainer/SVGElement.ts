import { addClassnameToElement, getTruthyClasses } from 'helpers'

import { converterPxToRem } from 'utils/converterPxToRem'
import { strokeConfig, fillConfig } from 'variables/css'

import { initialHeight, initialViewBox, initialWidth, linkW3OrgSVG } from '../constants'
import { type SVGProps } from '../types'

export const SVGElement = ({
  fill = 'black',
  height = initialHeight,
  width = initialWidth,
  viewBox = initialViewBox,
  stroke,
  classname,
}: SVGProps) => {
  const iconSvg = document.createElementNS(linkW3OrgSVG, 'svg')

  addClassnameToElement({
    element: iconSvg,
    classname: getTruthyClasses([fillConfig[fill], stroke && strokeConfig[stroke], classname]),
  })

  iconSvg.setAttribute('viewBox', viewBox)
  iconSvg.setAttribute('width', converterPxToRem(width))
  iconSvg.setAttribute('height', converterPxToRem(height))

  return iconSvg
}
