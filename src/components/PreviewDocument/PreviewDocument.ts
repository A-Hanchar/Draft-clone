import { Button } from 'components/Button'
import { Text } from 'components/Text'

import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type СontentProps } from './types'

export const PreviewDocument = ({ id }: СontentProps) => {
  const wrapperButtons = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex gap-2',
    children: [
      Button({ appearanceType: 'success', children: 'view', textTransform: 'uppercase' }),
      Button({ appearanceType: 'primary', children: 'share', textTransform: 'uppercase' }),
      Button({ appearanceType: 'alert', children: 'edit', textTransform: 'uppercase' }),
    ],
  })

  // TODO: text variable to debug development, will be deleted after adding back-end to the project
  const text = 'fish'
  const content = Text({
    tagName: 'p',
    classname: 'line-clamp-3',
    innerText: text,
  })

  const monthDay = new Date().toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
  })
  const data = Text({ tagName: 'p', innerText: monthDay, classname: 'text-end border-b-2 border-slate-900' })

  const documentComponent = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-4',
    children: [wrapperButtons, content, data],
  })

  // TODO: remove this line after adding back-end to the project
  documentComponent.id = id

  return documentComponent
}
