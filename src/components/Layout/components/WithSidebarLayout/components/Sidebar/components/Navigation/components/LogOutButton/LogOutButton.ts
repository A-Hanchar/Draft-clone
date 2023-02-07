import { Button } from 'components/Button'
import { getTruthyClasses } from 'helpers'
import { type PropsWithClassname } from 'types'

export const LogOutButton = ({ classname }: PropsWithClassname) =>
  Button({
    children: 'Log Out',
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
  })
