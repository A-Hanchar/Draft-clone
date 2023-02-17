import { auth, getStorageRef } from 'api'
import { uploadBytes } from 'firebase/storage'
import { createBlob } from 'helpers'

export const createDocument = async () => {
  const file = createBlob()

  if (auth.currentUser) {
    const docName = String(Date.now())

    await uploadBytes(getStorageRef(docName), file)

    return docName
  }

  return null
}
