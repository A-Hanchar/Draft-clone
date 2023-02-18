import { Button } from 'components/Button'
import { goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'

import { type OpenButtonProps } from './types'

export const OpenButton = ({ documentId }: OpenButtonProps) => {
  const handleOpenDocument = () => {
    goToPageAndRenderRoute(`${routerPathes.documents}/${documentId}`)
  }

  return Button({
    appearanceType: 'success',
    children: 'open',
    textTransform: 'uppercase',
    weight: 700,
    onclick: handleOpenDocument,
  })
}
