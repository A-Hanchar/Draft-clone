import { createElementWithClassNameAndAppendNode } from 'helpers'

export const Documents = () => {
  const wrapperDocument = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-6 max-w-3xl',
  })

  return wrapperDocument
}
