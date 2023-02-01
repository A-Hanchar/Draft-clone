export const addClassnameToElement = ({ element, classname }: { element: HTMLElement; classname?: string }) => {
  classname && element.classList.add(classname)
}
