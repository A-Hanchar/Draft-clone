import { Button } from 'components/Button'
import { Drawer } from 'components/Drawer'
import { openModalWithContent } from 'helpers'
import { type PropsWithClassname } from 'types'

export const SettingButton = ({ classname = '' }: PropsWithClassname) => {
  const modal = Drawer({
    children: 'options',
    title: 'settings',
  })

  return Button({
    children: 'Settings',
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: `relative ${classname}`,
    onclick: () => {
      openModalWithContent(modal)
    },
  })
}
