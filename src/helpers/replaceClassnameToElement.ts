import { addClassnameToElement } from './addClassnameToElement'
import { removeClassnameFromElement } from './removeClassnameFromElement'

export const replaceClassnameToElement = ({
  element,
  removeClassname,
  addClassname,
}: {
  element: HTMLElement | SVGGraphicsElement
  removeClassname?: string
  addClassname?: string
}) => {
  removeClassnameFromElement({ element, classname: removeClassname })
  addClassnameToElement({ element, classname: addClassname })
}
