import { getDocumentById } from 'api'

export const getDocumentContentById = async (documentId: string) => {
  const file = await getDocumentById(documentId)
  const content = await file.text()

  return content
}
