import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import { ManagedButtons } from './components'
import { type PreviewDocumentProps } from './types'

export const PreviewDocument = ({ id, documentContent, date }: PreviewDocumentProps) => {
  const content = Text({
    tagName: 'p',
    classname: 'line-clamp-1',
    children: documentContent,
  })

  const monthDay = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })

  const data = Text({
    textTransform: 'uppercase',
    tagName: 'p',
    children: monthDay,
    classname: 'pb-2 text-end border-b border-slate-300',
    color: 'neutral',
    weight: 700,
  })

  const documentComponent = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-4',
    children: [ManagedButtons({ documentId: id }), content, data],
  })

  return documentComponent
}
