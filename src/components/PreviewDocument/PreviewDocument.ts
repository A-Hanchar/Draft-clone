import { Button } from 'components/Button'
import { Text } from 'components/Text'

import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type СontentProps } from './types'

export const PreviewDocument = ({ text }: СontentProps) => {
  const wrapperButtons = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex gap-2',
    children: [
      Button({ appearanceType: 'success', children: 'view', textTransform: 'uppercase', id: 'view' }),
      Button({ appearanceType: 'primary', children: 'share', textTransform: 'uppercase', id: 'share' }),
      Button({ appearanceType: 'alert', children: 'edit', textTransform: 'uppercase', id: 'edit' }),
    ],
  })

  const content = Text({ tagName: 'p', innerText: text })

  const monthDay = new Date().toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
  })
  const data = Text({ tagName: 'p', innerText: monthDay, classname: 'text-end' })

  const hr = createElementWithClassNameAndAppendNode({ tagName: 'hr', children: data })

  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-4',
    children: [wrapperButtons, content, hr],
  })
}
