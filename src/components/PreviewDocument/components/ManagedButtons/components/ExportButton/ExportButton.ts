import { getDocumentById } from 'api'
import { Button } from 'components/Button'

import { type ExportButtonProps } from './types'

export const ExportButton = ({ documentId }: ExportButtonProps) => {
  const handleDocumentExport = async () => {
    const file = await getDocumentById(documentId)

    const downloadUrl = URL.createObjectURL(file)
    const downloadLink = document.createElement('a')

    downloadLink.style.display = 'none'
    downloadLink.href = downloadUrl
    downloadLink.setAttribute('download', 'draft.txt')

    document.body.appendChild(downloadLink)

    downloadLink.click()

    document.body.removeChild(downloadLink)

    URL.revokeObjectURL(downloadUrl)
  }

  return Button({
    appearanceType: 'primary',
    children: 'Export',
    textTransform: 'uppercase',
    weight: 700,
    onclick: handleDocumentExport,
  })
}
