import { signInWithGoogle } from 'api/auth/google'
import googleIcon from 'assets/icons/svg/google.svg'
import { Button } from 'components/Button'
import { Image } from 'components/Image'
import { renderComponent, routerPathes } from 'router'

export const Google = () => {
  const handleClick = async () => {
    try {
      await signInWithGoogle()

      window.history.pushState({}, '', routerPathes.documents)
      renderComponent()
    } catch (error) {
      // // Handle Errors here.
      // const errorCode = error.code
      // const errorMessage = error.message
      // // The email of the user's account used.
      // const email = error.customData.email
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error)
      // // ...
    }
  }

  return Button({
    children: Image({ url: googleIcon, alt: 'Google Authorization', classname: 'w-16' }),
    onclick: handleClick,
  })
}
