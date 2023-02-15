import { Body } from 'components/Body'
import { addClassnameToElement, replaceClassnameToElement } from 'helpers'

import styles from '../styles.module.css'

export const handleModalOpen =
  ({ modal }: { modal: HTMLDivElement }) =>
  () => {
    Body.append(modal)

    const scrollBarWidth = window.innerWidth - Body.clientWidth
    const currentPaddingRight = parseFloat(getComputedStyle(Body).paddingRight)

    Body.style.paddingRight = `${currentPaddingRight + scrollBarWidth}px`

    addClassnameToElement({ element: Body, classname: 'overflow-hidden' })
    replaceClassnameToElement({ element: modal, removeClassname: styles.close, addClassname: styles.open })
  }
