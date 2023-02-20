import { Button } from 'components/Button'
import { Drawer } from 'components/Drawer'
import { ToggleSwitch } from 'components/ToggleSwitch'
import { getTruthyClasses, toggleClassnameToElement } from 'helpers'
import { type PropsWithClassname } from 'types'

export const SettingButton = ({ classname }: PropsWithClassname) => {
  const dark = ToggleSwitch({
    name: 'night mode',
    onclick() {
      toggleClassnameToElement({ element: document.documentElement, classname: 'dark' })
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('dark', JSON.stringify(true))
      } else {
        localStorage.setItem('dark', JSON.stringify(false))
      }
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
