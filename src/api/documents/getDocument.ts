import { auth, getStorageRef } from 'api'

import { getBlob } from 'firebase/storage'

export const getDocument = async (documentId: string) => {
  if (auth.currentUser) {
    const file = await getBlob(getStorageRef(documentId))
    const content = await file.text()

    return content
  }

  return ''
}
