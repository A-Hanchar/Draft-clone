import { addClassnameToElement } from './addClassnameToElement'

export const replaceAllClassnameToElement = ({ element, classname }: { element: HTMLElement; classname?: string }) => {
  element.removeAttribute('class')

  addClassnameToElement({ element, classname })
}
