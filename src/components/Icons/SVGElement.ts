import { type SVGProps } from './type'

export const SVGElement = ({
  fill = '#000',
  height = '0',
  width = '0',
  viewBox = '0 0 0 0',
  d,
  xmlns = 'http://www.w3.org/2000/svg',
  transform = 'translate(0.000000,1206.000000) scale(0.100000,-0.100000)',
  stroke = 'none',
  classname = '',
}: SVGProps) => {
  const iconSvg = document.createElementNS(xmlns, 'svg')
  const SvgG = document.createElementNS(xmlns, 'g')

  SvgG.setAttribute('stroke', stroke)
  SvgG.setAttribute('transform', transform)

  iconSvg.append(SvgG)

  iconSvg.setAttribute('fill', fill)
  iconSvg.setAttribute('viewBox', viewBox)
  iconSvg.setAttribute('stroke', stroke)
  iconSvg.setAttribute('width', width)
  iconSvg.setAttribute('height', height)
  iconSvg.setAttribute('class', classname)

  d?.forEach((elem) => {
    const iconPath = document.createElementNS(xmlns, 'path')
    iconPath.setAttribute('d', elem)
    SvgG.append(iconPath)
  })

  return iconSvg
}
