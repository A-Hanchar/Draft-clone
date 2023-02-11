import { PreviewDocument } from 'components/PreviewDocument'
import { createElementWithClassNameAndAppendNode } from 'helpers'

export const Documents = () => {
  // TODO: delete this mock array when backend is working

  const mockDocuments = [
    PreviewDocument({ id: '1' }),
    PreviewDocument({ id: '1' }),
    PreviewDocument({ id: '1' }),
    PreviewDocument({ id: '1' }),
  ]

  const wrapperDocument = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-6 max-w-3xl',
    children: mockDocuments,
  })

  return wrapperDocument
}
