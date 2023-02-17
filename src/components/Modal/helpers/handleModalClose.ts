import { Body } from 'components/Body'
import { removeClassnameFromElement, replaceClassnameToElement } from 'helpers'

import styles from '../styles.module.css'

export const handleModalClose =
  ({ modal, onCancel }: { modal: HTMLDivElement; onCancel?: () => void }) =>
  () => {
    onCancel?.()

    replaceClassnameToElement({ element: modal, removeClassname: styles.open, addClassname: styles.close })

    modal.addEventListener(
      'animationend',
      () => {
        removeClassnameFromElement({ element: Body, classname: 'overflow-hidden' })
        Body.removeAttribute('style')

        modal.remove()
      },
      { once: true },
    )
  }
