import { Button } from 'components/Button'
import { type PropsWithClassname } from 'types'

export const SettingButton = ({ classname = '' }: PropsWithClassname) =>
  Button({
    children: 'Settings',
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: `relative ${classname}`,
  })
