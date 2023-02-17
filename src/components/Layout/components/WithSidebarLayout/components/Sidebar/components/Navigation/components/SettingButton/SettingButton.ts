import { Button } from 'components/Button'
import { Drawer } from 'components/Drawer'
import { getTruthyClasses, toggleClassnameToElement } from 'helpers'
import { type PropsWithClassname } from 'types'

export const SettingButton = ({ classname }: PropsWithClassname) => {
  const theme = Button({
    children: 'theme',
    onclick() {
      toggleClassnameToElement({ element: document.documentElement, classname: 'dark' })
    },
  })
  const modal = Drawer({
    children: theme,
    title: 'settings',
  })

  return Button({
    children: 'Settings',
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
    onclick: modal.handleOpen,
  })
}
