import { getDocumentById } from 'api'

export const exportDocument = async (documentId: string) => {
  const file = await getDocumentById(documentId)

  const downloadUrl = URL.createObjectURL(file)
  const downloadLink = document.createElement('a')

  downloadLink.href = downloadUrl
  downloadLink.setAttribute('download', 'draft.txt')

  downloadLink.click()

  URL.revokeObjectURL(downloadUrl)
}
