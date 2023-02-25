import { deleteDocumentById } from 'api'
import { Button } from 'components/Button'
import { en } from 'langs'

import { type DeleteButtonProps } from './types'

export const DeleteButton = ({ documentId, handleDocumentDelete }: DeleteButtonProps) => {
  const handleDeleteDocument = async () => {
    try {
      button.setDisable(true)
      button.setLoading(true)

      await deleteDocumentById(documentId)

      handleDocumentDelete()
    } catch (error) {
    } finally {
      button.setDisable(false)
      button.setLoading(false)
    }
  }

  const button = Button({
    appearanceType: 'alert',
    children: en.button.delete,
    textTransform: 'uppercase',
    weight: 700,
    onclick: handleDeleteDocument,
  })

  return button
}
