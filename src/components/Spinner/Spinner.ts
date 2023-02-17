import { addClassnameToElement, getTruthyClasses } from 'helpers'
import { colorsConfig } from 'variables/css'

import styles from './styles.module.css'
import { type SpinnerProps } from './types'

export const Spinner = ({ classname, color = 'green' }: SpinnerProps) => {
  const linkW3OrgSVG = 'http://www.w3.org/2000/svg'

  const svg = document.createElementNS(linkW3OrgSVG, 'svg')
  svg.setAttribute('viewBox', '0 0 50 50')

  addClassnameToElement({
    element: svg,
    classname: getTruthyClasses(['w-10', 'h-10', styles.spinner, colorsConfig.text[color], classname]),
  })

  const circle = document.createElementNS(linkW3OrgSVG, 'circle')

  addClassnameToElement({
    element: circle,
    classname: getTruthyClasses(['fill-none', 'stroke-[5px]', 'stroke-current', styles.path]),
  })

  circle.setAttribute('cx', '25')
  circle.setAttribute('cy', '25')
  circle.setAttribute('r', '20')

  svg.append(circle)

  return svg
}
