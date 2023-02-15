import { Body } from 'components/Body'
import { replaceClassnameToElement } from 'helpers'

import styles from '../styles.module.css'

export const handleModalOpen = ({ modal }: { modal: HTMLDivElement }) => {
  return () => {
    Body.append(modal)

    replaceClassnameToElement({ element: modal, removeClassname: styles.close, addClassname: styles.open })
  }
}
