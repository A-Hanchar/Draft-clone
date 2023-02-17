import { createDocument } from 'api'
import { Button } from 'components/Button'

export const CreateDocumentButton = () =>
  Button({
    appearanceType: 'success',
    children: 'New Document',
    textTransform: 'uppercase',
    classname: 'self-start',
    rounded: false,
    weight: 700,
    onclick: createDocument,
  })
