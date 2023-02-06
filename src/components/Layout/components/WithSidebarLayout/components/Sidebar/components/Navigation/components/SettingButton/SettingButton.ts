import { Button } from 'components/Button'
import { getTruthyClasses } from 'helpers'
import { type PropsWithClassname } from 'types'

export const SettingButton = ({ classname }: PropsWithClassname) =>
  Button({
    children: 'Settings',
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
  })
