import { auth, getUserDocumentRef } from 'api'

import { deleteObject } from 'firebase/storage'

export const deleteDocumentById = (documentId: string) => {
  if (auth.currentUser) {
    return deleteObject(getUserDocumentRef(documentId))
  }

  throw new Error(`Error at deleting the doc. User is null`)
}
