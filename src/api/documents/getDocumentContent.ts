import { getDocument } from 'api'

export const getDocumentContent = async (documentId: string) => {
  const file = await getDocument(documentId)
  const content = await file.text()

  return content
}
