import { addClassnameToElement } from './addClassnameToElement'

export const createElementWithClassName = <K extends keyof HTMLElementTagNameMap>({
  tagName,
  classname,
}: {
  tagName: K
  classname?: string
}) => {
  const element = document.createElement(tagName)

  addClassnameToElement({ element, classname })

  return element
}
