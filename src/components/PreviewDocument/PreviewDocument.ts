import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import { ManagedButtons } from './components'
import { DocumentDate } from './components/DocumentDate'
import { type PreviewDocumentProps } from './types'

export const PreviewDocument = ({ id, documentContent, date }: PreviewDocumentProps) => {
  const handleDocumentDelete = () => {
    previewDocument.remove()
  }

  const previewDocument = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-4',
    children: [
      Text({
        tagName: 'p',
        classname: 'line-clamp-1',
        children: [ManagedButtons({ documentId: id, handleDocumentDelete }), documentContent],
      }),
      DocumentDate({ date }),
    ],
  })

  return previewDocument
}
