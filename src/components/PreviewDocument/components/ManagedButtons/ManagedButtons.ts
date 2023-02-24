import { createElementWithClassNameAndAppendNode } from 'helpers'

import { DeleteButton } from './components/DeleteButton'
import { ExportButton } from './components/ExportButton'
import { OpenButton } from './components/OpenButton'
import { type ManagedButtonsProps } from './types'

export const ManagedButtons = ({ documentId }: ManagedButtonsProps) =>
  createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex gap-2',
    children: [OpenButton({ documentId }), ExportButton({ documentId }), DeleteButton()],
  })
