import { createElementWithClassNameAndAppendNode } from 'helpers'
import { getDocumentIdParam } from 'router'

export const Document = () => {
  const { documentId } = getDocumentIdParam()
  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: `Document Page: id - ${documentId ?? ''}`,
  })
}
