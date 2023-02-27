import { type SVGPathProps } from './types'
import { linkW3OrgSVG } from '../constants'

export const SVGPath = ({ d }: SVGPathProps) => {
  const iconPath = document.createElementNS(linkW3OrgSVG, 'path')

  iconPath.setAttribute('d', d)

  return iconPath
}
