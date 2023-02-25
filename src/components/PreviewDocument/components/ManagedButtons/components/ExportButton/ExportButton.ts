import { Button } from 'components/Button'
import { exportDocument } from 'helpers'

import { type ExportButtonProps } from './types'

export const ExportButton = ({ documentId }: ExportButtonProps) => {
  const handleDocumentExport = async () => {
    try {
      button.setDisable(true)
      button.setLoading(true)

      await exportDocument(documentId)
    } catch {
    } finally {
      button.setDisable(false)
      button.setLoading(false)
    }
  }

  const button = Button({
    appearanceType: 'primary',
    children: 'Export',
    textTransform: 'uppercase',
    weight: 700,
    onclick: handleDocumentExport,
  })

  return button
}
