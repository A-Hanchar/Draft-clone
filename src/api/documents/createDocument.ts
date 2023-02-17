import { auth, getUserDocumentRef } from 'api'
import { uploadBytes } from 'firebase/storage'
import { createNewTextFile } from 'helpers'

export const createDocument = async () => {
  const file = createNewTextFile()

  if (auth.currentUser) {
    const docName = Date.now()

    await uploadBytes(getUserDocumentRef(docName), file)

    return docName
  }

  return null
}
