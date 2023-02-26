import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import { ManagedButtons } from './components'
import { DocumentDate } from './components/DocumentDate'
import { type PreviewDocumentProps } from './types'

export const PreviewDocument = ({ id, documentContent, date }: PreviewDocumentProps) => {
  const handleDocumentDelete = () => {
    previewDocument.remove()
  }

  const previewText = Text({
    tagName: 'p',
    children: documentContent,
    classname: 'max-w-[24rem] md:max-w-[18rem] sm:max-w-[12rem]',
  })

  const previewDocument = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-4',
    children: [
      createElementWithClassNameAndAppendNode({
        tagName: 'div',
        classname: 'line-clamp-1',
        children: [ManagedButtons({ documentId: id, handleDocumentDelete }), previewText],
      }),
      DocumentDate({ date }),
    ],
  })

  return previewDocument
}
