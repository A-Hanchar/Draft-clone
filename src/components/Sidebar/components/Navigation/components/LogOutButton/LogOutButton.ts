import { signOut } from 'api/auth'
import { Button } from 'components/Button'
import { getTruthyClasses, goToPageAndRenderRoute } from 'helpers'
import { t } from 'i18n'
import { routerPathes } from 'router'
import { type PropsWithClassname } from 'types'

export const LogOutButton = ({ classname }: PropsWithClassname) => {
  const handleButtonClick = async () => {
    await signOut()

    goToPageAndRenderRoute(routerPathes.home)
  }

  const logOutButton = Button({
    children: t('button.logOut'),
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
    onclick: handleButtonClick,
  })

  return logOutButton
}
