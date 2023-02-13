import { auth } from 'api/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const signInByEmail = async ({ email, password }: { email: string; password: string }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password)

  return user
}
