import { replaceClassnameToElement } from 'helpers'

import styles from '../styles.module.css'

export const handleModalClose = ({ modal, onCancel }: { modal: HTMLDivElement; onCancel?: () => void }) => {
  return () => {
    onCancel?.()

    replaceClassnameToElement({ element: modal, removeClassname: styles.open, addClassname: styles.close })

    setTimeout(() => {
      modal.remove()
    }, 400)
  }
}
