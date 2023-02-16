import { storage, auth } from 'api'
import { PreviewDocument } from 'components/PreviewDocument'
import { onAuthStateChanged } from 'firebase/auth'
import { ref, listAll, getBlob } from 'firebase/storage'
import { createElementWithClassName } from 'helpers'

export const Documents = () => {
  const documentsWrapper = createElementWithClassName({
    tagName: 'div',
    classname: 'flex flex-col gap-6 max-w-3xl',
  })

  const getDocumentList = () => {
    onAuthStateChanged(auth, async () => {
      try {
        if (auth.currentUser) {
          const documentList = await listAll(ref(storage, auth.currentUser.uid))

          const documentPromises = documentList.items.map(async (document) => {
            const file = await getBlob(ref(storage, document.fullPath))
            const previewText = await file.text()
            const date = new Date(parseInt(document.name.slice(0, -4), 10))
            return PreviewDocument({ id: document.name, date, previewText })
          })

          const previewDocuments = await Promise.all(documentPromises)
          previewDocuments.forEach((previewDocument) => {
            documentsWrapper.prepend(previewDocument)
          })
        }
      } catch (error) {}
    })
  }

  getDocumentList()

  return documentsWrapper
}
