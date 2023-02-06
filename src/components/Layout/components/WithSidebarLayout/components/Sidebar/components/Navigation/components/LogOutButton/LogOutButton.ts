import { Button } from 'components/Button'
import { type PropsWithClassname } from 'types'

export const LogOutButton = ({ classname = '' }: PropsWithClassname) =>
  Button({
    children: 'Log Out',
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: `relative ${classname}`,
  })
