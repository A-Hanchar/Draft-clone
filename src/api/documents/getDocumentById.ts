import { auth, getUserDocumentRef } from 'api'

import { getBlob } from 'firebase/storage'

export const getDocumentById = (documentId: string) => {
  if (auth.currentUser) {
    return getBlob(getUserDocumentRef(documentId))
  }

  throw new Error(`Error at getting the doc. User is null`)
}
