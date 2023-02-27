import { Button } from 'components/Button'
import { goToPageAndRenderRoute } from 'helpers'
import { t } from 'i18n'
import { routerPathes } from 'router'

import { type OpenButtonProps } from './types'

export const OpenButton = ({ documentId }: OpenButtonProps) => {
  const handleOpenDocument = () => {
    goToPageAndRenderRoute(`${routerPathes.documents}/${documentId}`)
  }

  return Button({
    appearanceType: 'success',
    classname: 'sm: max-w-[8rem] sm:text-xs',
    children: t('button.open'),
    textTransform: 'uppercase',
    weight: 700,
    onclick: handleOpenDocument,
  })
}
