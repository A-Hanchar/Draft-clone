import { auth } from 'api/config'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

export const signUpByEmail = async ({ email, password }: { email: string; password: string }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)

  try {
    await sendEmailVerification(user)
  } catch (error) {}

  return user
}
