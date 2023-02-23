import { getDocumentContentById, updateDocument } from 'api'
import { Error } from 'components/Error'
import { Form } from 'components/Form'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { getDocumentIdParam } from 'router'

export const Document = async () => {
  const { documentId = '' } = getDocumentIdParam()

  try {
    const content = await getDocumentContentById(documentId)

    const textArea = Form.Textarea({
      classname: 'w-1/2 p-2 h-[90vh] focus:outline-none bg-gray-100 overflow-auto scrollbar-hide',
      defaultValue: content,
    })

    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'q') {
        e.preventDefault()
        updateDocument({ documentId, content: textArea.value })
      }
    })

    return createElementWithClassNameAndAppendNode({
      tagName: 'div',
      classname: 'flex justify-center p-10',
      children: textArea,
    })
  } catch (error) {
    return Error({ error, classname: 'flex justify-center p-10' })
  }
}
