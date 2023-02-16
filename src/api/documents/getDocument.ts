import { auth, getStorageRef } from 'api'
import { onAuthStateChanged } from 'firebase/auth'

import { getBlob } from 'firebase/storage'

export const getDocument = (documentId: string, textArea: HTMLTextAreaElement) => {
  onAuthStateChanged(auth, async () => {
    try {
      if (auth.currentUser && documentId) {
        const file = await getBlob(getStorageRef(documentId))
        const content = await file.text()
        textArea.value = content
      }
    } catch (error) {}
  })
}
