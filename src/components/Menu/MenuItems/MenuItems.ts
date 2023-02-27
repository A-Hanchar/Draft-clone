import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type MenuItemsProps } from './types'
import { MenuItemComponent, type MenuItem } from '../MenuItem'

export const MenuItems = <T>({ elements, onChange, openSide = 'left' }: MenuItemsProps<T>) => {
  const handleClick = ({ key, title }: MenuItem<T>) => {
    wrapper.remove()

    onChange({ key, title })
  }

  const menuItems = elements.map(({ key, title }) =>
    MenuItemComponent({
      key,
      title,
      onclick: () => {
        handleClick({ key, title })
      },
    }),
  )

  const openSideClass = (() => {
    if (openSide === 'right') return 'right-0'

    return 'left-0'
  })()

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `absolute top-full ${openSideClass} flex flex-col gap-2 items-start p-3 z-10 w-max shadow-xl`,
    children: menuItems,
  })

  return wrapper
}
