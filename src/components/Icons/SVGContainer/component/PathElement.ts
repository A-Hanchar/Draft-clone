import { type IPath } from './type'
import { initialStroke, linkW3OrgSVG } from '../constants'

export const PathElement = ({ d, fillPath = '', strokePath = initialStroke }: IPath) => {
  const iconPath = document.createElementNS(linkW3OrgSVG, 'path')
  iconPath.setAttribute('d', d)
  iconPath.setAttribute('fill', fillPath)
  iconPath.setAttribute('stroke', strokePath)

  return iconPath
}
