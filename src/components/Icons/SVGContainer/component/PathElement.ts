import { type IPath } from './type'
import { linkW3OrgSVG } from '../constants'

export const PathElement = ({ d, fillPath = '' }: IPath) => {
  const iconPath = document.createElementNS(linkW3OrgSVG, 'path')
  iconPath.setAttribute('d', d)
  iconPath.setAttribute('fill', fillPath)

  return iconPath
}
