import { auth, getUserDocumentRef } from 'api'
import { uploadBytes } from 'firebase/storage'
import { createNewTextFile } from 'helpers'

export const createDocument = async () => {
  if (auth.currentUser) {
    const docName = Date.now()
    const file = createNewTextFile()

    await uploadBytes(getUserDocumentRef(docName), file)

    return docName
  }

  throw new Error(`Error at creating a doc. User is null`)
}
