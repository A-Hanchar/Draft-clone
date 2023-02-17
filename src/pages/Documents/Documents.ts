import { getDocumentList } from 'api'
import { PreviewDocument } from 'components/PreviewDocument'
import { createElementWithClassNameAndAppendNode } from 'helpers'

export const Documents = async () => {
  const documentData = await getDocumentList()

  const previewDocumentNodes = documentData.map((document) =>
    PreviewDocument({ id: document.name, date: document.date, documentContent: document.content }),
  )

  const documentsWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-6 max-w-3xl',
    children: previewDocumentNodes,
  })

  return documentsWrapper
}
