import { Button } from 'components/Button'
import { Drawer } from 'components/Drawer'
import { ToggleSwitch } from 'components/ToggleSwitch'
import { KEYS } from 'enums'
import { getTruthyClasses, toggleClassnameToElement } from 'helpers'
import { darkInstance } from 'helpers/instances/StorageInstance'
import { en } from 'langs'
import { type PropsWithClassname } from 'types'

export const SettingButton = ({ classname }: PropsWithClassname) => {
  const dark = ToggleSwitch({
    name: 'night mode',
    keyLocalStorage: KEYS.DARK,
    onclick() {
      toggleClassnameToElement({ element: document.documentElement, classname: KEYS.DARK })
      if (document.documentElement.classList.contains(KEYS.DARK)) {
        darkInstance.setTheme(KEYS.DARK)
      } else {
        darkInstance.setTheme(KEYS.LIGHT)
      }
    },
  })

  const modal = Drawer({
    children: dark,
    title: en.modal.settings.title,
  })

  return Button({
    children: en.button.setting,
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
    onclick: modal.handleOpen,
  })
}
