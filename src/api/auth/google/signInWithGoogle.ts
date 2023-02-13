import { auth } from 'api/config'
import { signInWithPopup } from 'firebase/auth'

import { googleProvider } from './config'

export const signInWithGoogle = async () => {
  const { user } = await signInWithPopup(auth, googleProvider)

  return user
}
