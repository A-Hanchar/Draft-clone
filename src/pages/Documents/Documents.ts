import { getDocumentList } from 'api'
import { createElementWithClassName } from 'helpers'

export const Documents = async () => {
  const documentsWrapper = createElementWithClassName({
    tagName: 'div',
    classname: 'flex flex-col gap-6 max-w-3xl',
  })

  const previewDocuments = await getDocumentList()

  if (previewDocuments) {
    previewDocuments.forEach((previewDocument) => {
      documentsWrapper.appendChild(previewDocument)
    })
  }

  return documentsWrapper
}
