import { deleteDocumentById } from 'api'
import { Button } from 'components/Button'
import { goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'

import { type DeleteButtonProps } from './types'

export const DeleteButton = ({ documentId }: DeleteButtonProps) => {
  const handleDeleteDocument = async () => {
    try {
      button.setDisable(true)
      button.setLoading(true)

      await deleteDocumentById(documentId)
      goToPageAndRenderRoute(`${routerPathes.documents}`)
    } catch (error) {
    } finally {
      button.setDisable(false)
      button.setLoading(false)
    }
  }

  const button = Button({
    appearanceType: 'alert',
    children: 'delete',
    textTransform: 'uppercase',
    weight: 700,
    onclick: handleDeleteDocument,
  })

  return button
}
