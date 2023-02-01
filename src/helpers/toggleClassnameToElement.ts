export const toggleClassnameToElement = ({ element, classname }: { element: HTMLElement; classname?: string }) => {
  classname && element.classList.toggle(classname)
}
