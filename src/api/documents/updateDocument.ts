import { auth, getUserDocumentRef } from 'api'
import { uploadBytes } from 'firebase/storage'
import { createNewTextFile } from 'helpers'

export const updateDocument = ({ documentId, content }: { documentId: string; content: string }) => {
  if (auth.currentUser) {
    const file = createNewTextFile(content)

    return uploadBytes(getUserDocumentRef(documentId), file)
  }

  throw new Error(`Error at updating the doc. User is null`)
}
