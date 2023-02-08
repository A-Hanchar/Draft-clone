import { Button } from 'components/Button'
import { Text } from 'components/Text'

import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type СontentProps } from './types'

export const PreviewDocument = ({ text, id }: СontentProps) => {
  const wrapperButtons = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex gap-2',
    children: [
      Button({ appearanceType: 'success', children: 'view', textTransform: 'uppercase' }),
      Button({ appearanceType: 'primary', children: 'share', textTransform: 'uppercase' }),
      Button({ appearanceType: 'alert', children: 'edit', textTransform: 'uppercase' }),
    ],
  })

  const content = Text({ tagName: 'p', classname: 'text-ellipsis overflow-hidden max-w-3xl max-h-28', innerText: text })

  const monthDay = new Date().toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
  })
  const data = Text({ tagName: 'p', innerText: monthDay, classname: 'text-end' })

  const hr = createElementWithClassNameAndAppendNode({ tagName: 'hr', children: data })

  const documentComponent = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-4',
    children: [wrapperButtons, content, hr],
  })

  documentComponent.id = id

  return documentComponent
}
