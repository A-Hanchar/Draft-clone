import { signOut } from 'api/auth'
import { Button } from 'components/Button'
import { getTruthyClasses, goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'
import { type PropsWithClassname } from 'types'

export const LogOutButton = ({ classname }: PropsWithClassname) => {
  const handleButtonClick = async () => {
    await signOut()

    goToPageAndRenderRoute(routerPathes.home)
  }

  const logOutButton = Button({
    children: 'Log Out',
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
    onclick: handleButtonClick,
  })

  return logOutButton
}
