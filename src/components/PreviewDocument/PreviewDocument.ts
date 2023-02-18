import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import { ManagedButtons } from './components'
import { DocumentDate } from './components/DocumentDate'
import { type PreviewDocumentProps } from './types'

export const PreviewDocument = ({ id, documentContent, date }: PreviewDocumentProps) =>
  createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-4',
    children: [
      ManagedButtons({ documentId: id }),
      Text({
        tagName: 'p',
        classname: 'line-clamp-1',
        children: documentContent,
      }),
      DocumentDate({ date }),
    ],
  })
