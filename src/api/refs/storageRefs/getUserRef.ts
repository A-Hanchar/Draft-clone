import { storage } from 'api'
import { ref } from 'firebase/storage'

export const getUserRef = (userId: string) => ref(storage, userId)
