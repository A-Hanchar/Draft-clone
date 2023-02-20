import { auth, getUserDocumentRef } from 'api'

import { deleteObject } from 'firebase/storage'

export const deleteDocumentById = async (documentId: string) => {
  if (auth.currentUser) {
    await deleteObject(getUserDocumentRef(documentId))

    return
  }

  throw new Error(`Error at deleting the doc. User is null`)
}
