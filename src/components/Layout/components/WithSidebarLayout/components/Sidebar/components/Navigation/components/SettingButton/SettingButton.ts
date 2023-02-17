import { Button } from 'components/Button'
import { Drawer } from 'components/Drawer'
import { GuiSwitch } from 'components/GuiSwitch'
import { getTruthyClasses, toggleClassnameToElement } from 'helpers'
import { type PropsWithClassname } from 'types'

export const SettingButton = ({ classname }: PropsWithClassname) => {
  const dark = GuiSwitch({
    name: 'night mode',
    onclick() {
      toggleClassnameToElement({ element: document.documentElement, classname: 'dark' })
    },
  })

  const modal = Drawer({
    children: dark,
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
