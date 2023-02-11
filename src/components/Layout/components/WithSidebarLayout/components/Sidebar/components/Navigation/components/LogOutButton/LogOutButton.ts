import { signOut } from 'api/auth'
import { Button } from 'components/Button'
import { getTruthyClasses } from 'helpers'
import { renderComponent, routerPathes } from 'router'
import { type PropsWithClassname } from 'types'

export const LogOutButton = ({ classname }: PropsWithClassname) => {
  const handleButtonClick = async () => {
    await signOut()

    window.history.pushState({}, '', routerPathes.home)
    renderComponent()
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
