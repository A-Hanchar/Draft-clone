import { getUserDocumentRef } from 'api'

import { getDownloadURL } from 'firebase/storage'

export const getDownloadUrl = (documentId: string) => {
  const url = getDownloadURL(getUserDocumentRef(documentId))

  return url
}
