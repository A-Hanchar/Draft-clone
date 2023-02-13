import { Body } from 'components/Body'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { colorsConfig } from 'variables/css'

import { CloseButton } from './components/CloseButton'
import { Title } from './components/Title'

import { type DrawerProps } from './types'

export const Drawer = ({ children, title, onCancel }: DrawerProps) => {
  const handleDrawerClose = () => {
    Body.removeChild(wrapper)
    onCancel?.()
  }

  const contentWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `relative p-9 w-72 ${colorsConfig.bg.white} rounded`,
    children: [CloseButton({ onclick: handleDrawerClose }), Title({ title }), children],
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `h-screen w-screen flex z-[999] fixed top-0 -left-96 hover:translate-x-96 duration-700`,
    children: contentWrapper,
  })

  wrapper.addEventListener('click', (event) => {
    const isPopupContentArea = event.composedPath().includes(contentWrapper)

    if (!isPopupContentArea) {
      handleDrawerClose()
    }
  })

  return wrapper
}
