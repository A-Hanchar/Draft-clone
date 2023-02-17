import { auth, getStorageRef } from 'api'
import { onAuthStateChanged } from 'firebase/auth'
import { uploadBytes } from 'firebase/storage'
import { createNewTextFile } from 'helpers'

export const updateDocument = (documentId: string, content: string) => {
  const file = createNewTextFile(content)

  onAuthStateChanged(auth, async () => {
    if (auth.currentUser) {
      if (documentId) {
        await uploadBytes(getStorageRef(documentId), file)
      }
    }
  })
}
