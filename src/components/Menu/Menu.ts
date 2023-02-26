import { createElementWithClassNameAndAppendNode } from 'helpers'

import { MenuButton } from './MenuButton'

import { type MenuItem } from './MenuItem'
import { MenuItems } from './MenuItems'
import { getActiveMenuItem } from './getActiveMenuItem'
import { type MenuProps } from './types'

export const Menu = <T>({ elements, activeItemIndex, onChange, openSide }: MenuProps<T>) => {
  const activeMenuItem = getActiveMenuItem<T>({ elements, activeItemIndex })
  let isMenuItemsOpen = false

  const updateMenuButtonTitle = ({ title, key }: MenuItem<T>) => {
    menuButton.setContent(title)

    onChange?.({ title, key })
  }

  const toggleMenuItems = () => {
    if (!isMenuItemsOpen) {
      isMenuItemsOpen = true
      wrapper.append(menuItems)

      return
    }

    isMenuItemsOpen = false
    menuItems.remove()
  }

  const menuItems = MenuItems({ elements, onChange: updateMenuButtonTitle, openSide })
  const menuButton = MenuButton({ title: activeMenuItem.title, onclick: toggleMenuItems })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'relative',
    children: menuButton,
  })

  return wrapper
}
