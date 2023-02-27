import { Button } from 'components/Button'

import { type MenuItemProps } from './types'

export const MenuItem = <T>({ title, onclick }: MenuItemProps<T>) =>
  Button({ children: title, onclick, appearanceType: 'none', color: 'darkGray' })
