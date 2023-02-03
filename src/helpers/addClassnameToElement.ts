import { SYMBOL } from 'enums'

export const addClassnameToElement = ({ element, classname = '' }: { element: HTMLElement; classname?: string }) => {
  const classnamesArray = classname.split(SYMBOL.SPACE).filter(Boolean)

  if (!classnamesArray.length) {
    return element
  }

  classnamesArray.forEach((cssClass) => {
    element.classList.add(cssClass)
  })

  return element
}
