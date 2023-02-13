import { SYMBOL } from 'enums'

export const replaceAllClassnameToElement = ({
  element,
  classname = '',
}: {
  element: HTMLElement
  classname?: string
}) => {
  element.removeAttribute('class')

  const classnamesArray = classname.split(SYMBOL.SPACE).filter(Boolean)

  if (!classnamesArray.length) {
    return
  }

  classnamesArray.forEach((cssClass) => {
    element.classList.add(cssClass)
  })
}
