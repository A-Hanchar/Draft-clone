import { signOut } from 'api/auth'
import { Button } from 'components/Button'
import { getTruthyClasses, goToPageAndRenderRoute } from 'helpers'
import { t } from 'i18n'
import { keyboardShortcutsInstance } from 'instances'
import { routerPathes } from 'router'
import { type PropsWithClassname } from 'types'

export const LogOutButton = ({ classname }: PropsWithClassname) => {
  const handleButtonClick = async () => {
    try {
      logOutButton.setDisable(true)
      logOutButton.setLoading(true)

      await signOut()

      goToPageAndRenderRoute(routerPathes.home)
    } catch (error) {
    } finally {
      logOutButton.setDisable(false)
      logOutButton.setLoading(false)
    }
  }

  const logOutButton = Button({
    children: t('button.logOut'),
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
    onclick: handleButtonClick,
  })

  document.addEventListener('keydown', (event) => {
    keyboardShortcutsInstance.ctrl_alt_q({
      event,
      callback: handleButtonClick,
    })
  })

  return logOutButton
}
