import { Button } from 'components/Button'
import { Drawer } from 'components/Drawer'
import { getTruthyClasses } from 'helpers'
import { t } from 'i18n'
import { keyboardShortcutsInstance } from 'instances'
import { type PropsWithClassname } from 'types'

import { HotKeysInfo } from '../HotKeysInfo'

export const SettingButton = ({ classname }: PropsWithClassname) => {
  const modal = Drawer({
    children: HotKeysInfo(),
    title: t('modal.settings.title'),
  })

  const settingButton = Button({
    children: t('button.setting'),
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
    onclick: modal.handleOpen,
  })

  document.addEventListener('keydown', (event) => {
    keyboardShortcutsInstance.ctrl_alt_b({
      event,
      callback: modal.handleOpen,
    })
  })

  return settingButton
}
