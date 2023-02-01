export const createElementWithClassName = <K extends keyof HTMLElementTagNameMap>({
  tagName,
  classname = '',
}: {
  tagName: K
  classname?: string
}) => {
  const element = document.createElement(tagName)
  element.className = classname

  return element
}
