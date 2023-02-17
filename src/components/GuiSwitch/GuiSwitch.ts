import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type GuiSwitchProps } from './type'

export const GuiSwitch = ({ name, onclick }: GuiSwitchProps) => {
  const input = createElementWithClassNameAndAppendNode({ tagName: 'input' })
  input.type = 'checkbox'
  input.role = 'switch'

  const text = Text({ tagName: 'p', children: name })

  const label = createElementWithClassNameAndAppendNode({
    tagName: 'label',
    children: [text, input],
    classname: 'flex items-center justify-between',
  })

  const handleClick = () => {
    onclick?.()
  }

  input.addEventListener('click', handleClick)

  return label
}
