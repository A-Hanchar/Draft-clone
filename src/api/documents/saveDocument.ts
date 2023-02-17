import { auth, getStorageRef } from 'api'
import { uploadBytes } from 'firebase/storage'

import { createBlob } from 'helpers'

export const saveDocument = async (documentId: string, content: string) => {
  const file = createBlob(content)

  try {
    if (auth.currentUser) {
      if (documentId) {
        await uploadBytes(getStorageRef(documentId), file)
      }
    }
  } catch (err) {
    console.dir(err)
  }
}
