import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { t } from 'i18n'

import { type SnackbarProps } from './types'

export const Snackbar = ({ classname, color, weight }: SnackbarProps) => {
  const innerText = Text({ tagName: 'p', color, weight, children: t('documentPage.saveMessage') })

  const snackbar = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname,
    children: innerText,
  })

  const getSnackbar = () => {
    handleRemoveSnackbar()

    return snackbar
  }

  const handleRemoveSnackbar = () => {
    setTimeout(() => {
      snackbar.remove()
    }, 3000)
  }

  return Object.assign(snackbar, {
    getSnackbar,
  })
}
