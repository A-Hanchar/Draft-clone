import { deleteDocumentById } from 'api'
import { Button } from 'components/Button'
import { goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'

import { type DeleteButtonProps } from './types'

export const DeleteButton = ({ documentId }: DeleteButtonProps) => {
  const handleDeleteDocument = async () => {
    await deleteDocumentById(documentId)
    goToPageAndRenderRoute(`${routerPathes.documents}`)
  }

  return Button({
    appearanceType: 'alert',
    children: 'delete',
    textTransform: 'uppercase',
    weight: 700,
    onclick: handleDeleteDocument,
  })
}
