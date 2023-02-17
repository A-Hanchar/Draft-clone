import { createElementWithClassName, createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { colorsConfig } from 'variables/css'

import { CloseButton } from './components/CloseButton'
import { Title } from './components/Title'

import { handleModalClose, handleModalOpen } from './helpers'
import styles from './styles.module.css'
import { type ModalProps } from './types'

export const Modal = ({ children, title, onCancel }: ModalProps) => {
  const wrapper = createElementWithClassName({
    tagName: 'div',
    classname: getTruthyClasses([
      'h-screen w-screen flex items-center justify-center z-[999] fixed top-0 left-0 px-4',
      colorsConfig.bg['neutral/75'],
      styles.modal,
    ]),
  })

  const handleClose = handleModalClose({ modal: wrapper, onCancel })
  const handleOpen = handleModalOpen({ modal: wrapper })

  const contentWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `relative p-9 ${colorsConfig.bg.white} rounded md:p-6`,
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
