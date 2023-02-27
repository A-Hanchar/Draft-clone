import { getDocumentById } from 'api'
import { Button } from 'components/Button'
import { exportDocument } from 'helpers'
import { t } from 'i18n'

import { type ExportButtonProps } from './types'

export const ExportButton = ({ documentId }: ExportButtonProps) => {
  const handleDocumentExport = async () => {
    try {
      button.setDisable(true)
      button.setLoading(true)

      const file = await getDocumentById(documentId)

      exportDocument(file)
    } catch {
    } finally {
      button.setDisable(false)
      button.setLoading(false)
    }
  }

  const button = Button({
    appearanceType: 'primary',
    classname: 'sm: max-w-[8rem] sm:text-xs',
    children: t('button.export'),
    textTransform: 'uppercase',
    weight: 700,
    onclick: handleDocumentExport,
  })

  return button
}
