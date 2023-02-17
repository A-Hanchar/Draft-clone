import { getDocument, saveDocument } from 'api/documents'
import { TextArea } from 'components/TextArea'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { getDocumentIdParam } from 'router'

export const Document = () => {
  const { documentId } = getDocumentIdParam()

  const textArea = TextArea({
    classname: 'w-1/2 p-2 h-[90vh] focus:outline-none bg-gray-100 overflow-auto scrollbar-hide',
  })

  getDocument(documentId!, textArea)

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'q') {
      e.preventDefault()
      saveDocument(documentId!, textArea.value)
    }
  })

  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex justify-center p-10',
    children: [textArea],
  })
}
