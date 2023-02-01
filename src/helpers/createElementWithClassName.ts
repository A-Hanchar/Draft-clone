import { addClassnameToElement } from './addClassnameToElement'

export const createElementWithClassName = <K extends keyof HTMLElementTagNameMap>({
  tagName,
  classname,
}: {
  tagName: K
  classname?: string | Array<string | undefined>
}) => {
  const element = document.createElement(tagName)

  if (typeof classname === 'string') {
    addClassnameToElement({ element, classname })
  }

  if (Array.isArray(classname)) {
    classname.filter(Boolean).forEach((cssClass) => {
      addClassnameToElement({ element, classname: cssClass })
    })
  }

  return element
}
