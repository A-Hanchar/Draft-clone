import { type MenuItem } from '../MenuItem/types'

export type MenuItemsOpenSide = 'left' | 'right'
export type MenuItemsList<T> = [MenuItem<T>, ...Array<MenuItem<T>>]

export type MenuItemsProps<T> = {
  elements: MenuItemsList<T>
  onChange: (menuItem: MenuItem<T>) => void
  openSide?: MenuItemsOpenSide
}
