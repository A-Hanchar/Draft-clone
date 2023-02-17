import { SYMBOL } from 'enums'

export const addClassnameToElement = ({
  element,
  classname = '',
}: {
  element: HTMLElement | SVGGraphicsElement
  classname?: string
}) => {
  const classnamesArray = classname.split(SYMBOL.SPACE).filter(Boolean)

  classnamesArray.forEach((cssClass) => {
    element.classList.add(cssClass)
  })
}
