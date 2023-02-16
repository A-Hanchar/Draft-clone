import { storage, auth } from 'api'
import { TextArea } from 'components/TextArea'
import { getBlob, ref } from 'firebase/storage'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { getDocumentIdParam } from 'router'

export const Document = () => {
  const { documentId } = getDocumentIdParam()

  const textArea = TextArea({ classname: 'document-text w-full h-full p-2 focus:outline-none' })

  const getDocument = async () => {
    try {
      if (auth.currentUser && documentId) {
        const file = await getBlob(ref(storage, `${auth.currentUser.uid}/${documentId}.txt`))
        const content = await file.text()
        textArea.value = content
      }
    } catch (error) {}
  }

  getDocument()

  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [`Document Page: id - ${documentId ?? ''}`, textArea],
  })
}
