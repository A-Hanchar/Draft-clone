import { Body } from 'components/Body'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { colorsConfig } from 'variables/css'

import { CloseButton } from './components/CloseButton'
import { Title } from './components/Title'

import { type ModalProps } from './types'

export const Modal = ({ children, title, onCancel }: ModalProps) => {
  const handleModalClose = () => {
    Body.removeChild(wrapper)

    onCancel?.()
  }

  const contentWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `relative p-9 ${colorsConfig.bg.white} rounded`,
    children: [CloseButton({ onclick: handleModalClose }), Title({ title }), children],
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `${colorsConfig.bg['neutral/75']} h-screen w-screen flex items-center justify-center z-[999] fixed top-0 left-0`,
    children: contentWrapper,
  })

  wrapper.addEventListener('click', (event) => {
    const isPopupContentArea = event.composedPath().includes(contentWrapper)

    if (!isPopupContentArea) {
      handleModalClose()
    }
  })

  return wrapper
}
