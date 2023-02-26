import { type MenuItemsList } from './MenuItems'

export const getActiveMenuItem = <T>({
  elements,
  activeItemIndex,
}: {
  elements: MenuItemsList<T>
  activeItemIndex?: number
}) => {
  const activeIndex = activeItemIndex && activeItemIndex > 0 && activeItemIndex < elements.length ? activeItemIndex : 0

  return elements[activeIndex]!
}
