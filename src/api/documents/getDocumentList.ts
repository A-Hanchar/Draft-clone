import { storage, auth } from 'api'
import { PreviewDocument } from 'components/PreviewDocument'
import { onAuthStateChanged } from 'firebase/auth'
import { ref, listAll, getBlob, getMetadata } from 'firebase/storage'

export const getDocumentList = (documentsWrapper: HTMLDivElement) => {
  onAuthStateChanged(auth, async () => {
    try {
      if (auth.currentUser) {
        const documentList = await listAll(ref(storage, auth.currentUser.uid))

        const documentData = await Promise.all(
          documentList.items.map(async (document) => {
            const metadata = await getMetadata(document)
            const date = new Date(metadata.updated)
            return { document, metadata, date }
          }),
        )

        const sortedDocumentData = documentData.sort((a, b) => Number(b.date) - Number(a.date))

        const previewDocuments = sortedDocumentData.map(({ document, date }) => {
          const file = getBlob(ref(storage, document.fullPath))
          const previewText = file.then((blob) => blob.text())
          return Promise.all([document.name, date, previewText])
        })

        const resolvedPreviewDocuments = await Promise.all(previewDocuments)

        resolvedPreviewDocuments.forEach(([id, date, previewText]) => {
          const previewDocument = PreviewDocument({ id, date, previewText })
          documentsWrapper.appendChild(previewDocument)
        })
      }
    } catch (error) {}
  })
}
