import { storage, auth } from 'api'
import { ref } from 'firebase/storage'

export const getUserDocumentRef = (documentId: string | number) =>
  ref(storage, `${auth.currentUser!.uid}/${documentId}.txt`)
