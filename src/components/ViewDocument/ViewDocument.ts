import { Button } from 'components/Button'

import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type СontentProps } from './types'

export const ViewDocument = ({ text }: СontentProps) => {
  const wrapperButtons = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex gap-2',
    children: [
      Button({ appearanceType: 'success', children: 'view', textTransform: 'uppercase' }),
      Button({ appearanceType: 'primary', children: 'share', textTransform: 'uppercase' }),
      Button({ appearanceType: 'alert', children: 'edit', textTransform: 'uppercase' }),
    ],
  })

  const content = createElementWithClassNameAndAppendNode({ tagName: 'p', children: text })

  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-4',
    children: [wrapperButtons, content],
  })
}
