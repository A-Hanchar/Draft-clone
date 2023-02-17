import { auth, getStorageRef } from 'api'
import { onAuthStateChanged } from 'firebase/auth'
import { uploadBytes } from 'firebase/storage'
import { createBlob } from 'helpers'

export const saveDocument = (documentId: string, content: string) => {
  const file = createBlob(content)

  onAuthStateChanged(auth, async () => {
    try {
      if (auth.currentUser) {
        if (documentId) {
          await uploadBytes(getStorageRef(documentId), file)
        }
      }
    } catch (err) {
      console.dir(err)
    }
  })
}
