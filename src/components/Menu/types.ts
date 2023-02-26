import { type MenuItem } from './MenuItem/types'
import { type MenuItemsList, type MenuItemsOpenSide } from './MenuItems/types'

export type MenuProps<T> = {
  elements: MenuItemsList<T>
  onChange?: (menuItem: MenuItem<T>) => void
  activeItemIndex?: number
  openSide?: MenuItemsOpenSide
}
