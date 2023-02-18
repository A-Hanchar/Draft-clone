import { auth, getUserDocumentRef } from 'api'

import { getBlob } from 'firebase/storage'

export const getDocumentById = async (documentId: string) => {
  if (auth.currentUser) {
    const file = await getBlob(getUserDocumentRef(documentId))

    return file
  }

  throw new Error(`Error at getting the doc. User is null`)
}
