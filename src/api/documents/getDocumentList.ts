import { storage, auth, getUserRef } from 'api'
import { PreviewDocument } from 'components/PreviewDocument'
import { ref, listAll, getBlob, getMetadata } from 'firebase/storage'

export const getDocumentList = async () => {
  if (auth.currentUser) {
    const documentList = await listAll(getUserRef(auth.currentUser.uid))

    const documentData = await Promise.all(
      documentList.items.map(async (document) => {
        const metadata = await getMetadata(document)
        const date = new Date(metadata.updated)
        return { document, date }
      }),
    )

    const sortedDocumentData = documentData.sort((a, b) => Number(b.date) - Number(a.date))

    const previewDocumentPromises = sortedDocumentData.map(async ({ document, date }) => {
      const file = await getBlob(ref(storage, document.fullPath))
      const previewText = await file.text()
      return PreviewDocument({ id: document.name, date, previewText })
    })

    const previewDocuments = await Promise.all(previewDocumentPromises)

    return previewDocuments
  }

  return null
}
