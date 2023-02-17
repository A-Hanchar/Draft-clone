import { auth, getUserDocumentRef } from 'api'
import { uploadBytes } from 'firebase/storage'
import { createNewTextFile } from 'helpers'

export const updateDocument = async ({ documentId, content }: { documentId: string; content: string }) => {
  const file = createNewTextFile(content)

  if (auth.currentUser) {
    await uploadBytes(getUserDocumentRef(documentId), file)
  }
}
