import { createElementWithClassNameAndAppendNode } from 'helpers'
import { colorsConfig } from 'variables/css'

import { CloseButton } from './components/CloseButton'
import { Title } from './components/Title'

import { handleDrawerClose, handleDrawerOpen } from './helpers'
import { type DrawerProps } from './types'

export const Drawer = ({ children, title, onCancel }: DrawerProps) => {
  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `h-screen w-screen flex z-[999] fixed top-0`,
  })

  const handleClose = handleDrawerClose({ modal: wrapper, onCancel })
  const handleOpen = handleDrawerOpen({ modal: wrapper })

  const contentWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `relative p-9 w-72 ${colorsConfig.bg.white} rounded`,
    children: [CloseButton({ onclick: handleClose }), Title({ title }), children],
  })

  wrapper.addEventListener('click', (event) => {
    const isPopupContentArea = event.composedPath().includes(contentWrapper)

    if (!isPopupContentArea) {
      handleClose()
    }
  })

  wrapper.append(contentWrapper)

  return Object.assign(wrapper, {
    handleClose,
    handleOpen,
  })
}
