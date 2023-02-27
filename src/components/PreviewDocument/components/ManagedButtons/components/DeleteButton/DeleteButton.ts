import { deleteDocumentById } from 'api'
import { Button } from 'components/Button'
import { t } from 'i18n'

import { type DeleteButtonProps } from './types'

export const DeleteButton = ({ documentId, onClick }: DeleteButtonProps) => {
  const handleDeleteDocument = async () => {
    try {
      button.setDisable(true)
      button.setLoading(true)

      await deleteDocumentById(documentId)

      onClick()
    } catch (error) {
    } finally {
      button.setDisable(false)
      button.setLoading(false)
    }
  }

  const button = Button({
    appearanceType: 'alert',
    classname: 'sm: max-w-[8rem] sm:text-xs',
    children: t('button.delete'),
    textTransform: 'uppercase',
    weight: 700,
    onclick: handleDeleteDocument,
  })

  return button
}
