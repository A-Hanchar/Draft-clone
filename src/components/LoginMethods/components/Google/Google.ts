import { signInWithGoogle } from 'api/auth/google'
import googleIcon from 'assets/icons/svg/google.svg'
import { Button } from 'components/Button'
import { Image } from 'components/Image'
import { goToPageAndRenderRoute } from 'helpers'
import { t } from 'i18n'
import { routerPathes } from 'router'

export const Google = () => {
  const handleClick = async () => {
    try {
      await signInWithGoogle()

      goToPageAndRenderRoute(routerPathes.documents)
    } catch (error) {}
  }

  return Button({
    children: Image({ url: googleIcon, alt: t('authorizationMethod.google.title'), classname: 'w-16' }),
    onclick: handleClick,
  })
}
