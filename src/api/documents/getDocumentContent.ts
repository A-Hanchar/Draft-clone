import { auth, getDocument } from 'api'

export const getDocumentContent = async (documentId: string) => {
  if (auth.currentUser) {
    const file = await getDocument(documentId)
    const content = await file.text()

    return content
  }

  return ''
}
