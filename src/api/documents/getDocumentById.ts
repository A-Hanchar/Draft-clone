import { auth, getUserDocumentRef } from 'api'

import { getBlob } from 'firebase/storage'
import { createNewTextFile } from 'helpers'

export const getDocumentById = async (documentId: string) => {
  if (auth.currentUser) {
    const file = await getBlob(getUserDocumentRef(documentId))

    return file
  }

  return createNewTextFile()
}
