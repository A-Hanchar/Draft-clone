import { Button } from 'components/Button'

import { type MenuButtonProps } from './types'

export const MenuButton = ({ title, onclick }: MenuButtonProps) =>
  Button({
    classname: 'p-2.5 text-lg',
    onclick,
    children: title,
    weight: 700,
    appearanceType: 'none',
    color: 'darkGray',
  })
