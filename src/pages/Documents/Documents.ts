import { createElementWithClassName } from 'helpers'

export const Documents = () => {
  const documentsWrapper = createElementWithClassName({
    tagName: 'div',
    classname: 'flex flex-col gap-6 max-w-3xl',
  })

  return documentsWrapper
}
