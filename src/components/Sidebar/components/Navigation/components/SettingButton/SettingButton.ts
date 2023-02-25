import { Button } from 'components/Button'
import { Drawer } from 'components/Drawer'
import { getTruthyClasses } from 'helpers'
import { en } from 'langs'
import { type PropsWithClassname } from 'types'

export const SettingButton = ({ classname }: PropsWithClassname) => {
  const modal = Drawer({
    children: en.modal.settings.content,
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
