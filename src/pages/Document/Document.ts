import { getDocument, saveDocument } from 'api/documents'
import { TextArea } from 'components/TextArea'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { getDocumentIdParam } from 'router'

export const Document = () => {
  const { documentId } = getDocumentIdParam()

  const textArea = TextArea({ classname: 'document-text w-full h-full p-2 focus:outline-none' })

  getDocument(documentId!, textArea)

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault()
      console.dir('doc saved')
      saveDocument(documentId!, textArea)
    }
  })

  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [`Document Page: id - ${documentId ?? ''}`, textArea],
  })
}
