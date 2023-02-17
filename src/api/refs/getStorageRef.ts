import { storage, auth } from 'api'
import { ref } from 'firebase/storage'

export const getStorageRef = (documentId: string | number) => ref(storage, `${auth.currentUser!.uid}/${documentId}.txt`)
