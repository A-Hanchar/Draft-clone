import { Button } from 'components/Button'
import { Text } from 'components/Text'

import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type СontentProps } from './types'

export const PreviewDocument = ({ id }: СontentProps) => {
  const wrapperButtons = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex gap-2',
    children: [
      Button({ appearanceType: 'success', children: 'view', textTransform: 'uppercase', weight: 700 }),
      Button({ appearanceType: 'primary', children: 'share', textTransform: 'uppercase', weight: 700 }),
      Button({ appearanceType: 'alert', children: 'edit', textTransform: 'uppercase', weight: 700 }),
    ],
  })

  // TODO: text variable to debug development, will be deleted after adding back-end to the project
  const text = 'fish'
  const content = Text({
    tagName: 'p',
    classname: 'line-clamp-1',
    children: text,
  })

  const monthDay = new Date().toLocaleString('en-US', {
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
    children: [wrapperButtons, content, data],
  })

  // TODO: remove this line after adding back-end to the project
  documentComponent.id = id

  return documentComponent
}
