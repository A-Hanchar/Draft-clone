import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { t } from 'i18n'

import { type SnackbarProps } from './types'

export const Snackbar = ({ classname, color, weight }: SnackbarProps) => {
  const innerText = Text({ tagName: 'p', color, weight, children: t('documentPage.saveMessage') })

  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname,
    children: innerText,
  })
}
