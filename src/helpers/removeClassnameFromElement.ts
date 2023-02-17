import { SYMBOL } from 'enums'

export const removeClassnameFromElement = ({
  element,
  classname = '',
}: {
  element: HTMLElement | SVGGraphicsElement
  classname?: string
}) => {
  const classnamesArray = classname.split(SYMBOL.SPACE).filter(Boolean)

  classnamesArray.forEach((cssClass) => {
    element.classList.remove(cssClass)
  })
}
