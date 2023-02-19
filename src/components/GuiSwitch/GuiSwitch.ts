import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'

import { type GuiSwitchProps } from './type'

export const GuiSwitch = ({ name, onclick }: GuiSwitchProps) => {
  const title = Text({ tagName: 'span', children: name })

  const checkbox = createElementWithClassNameAndAppendNode({
    tagName: 'input',
    classname: 'hidden',
  })
  checkbox.type = 'checkbox'
  if (document.documentElement.classList.contains('dark')) {
    checkbox.checked = true
  } else {
    checkbox.checked = false
  }

  const slider = Text({
    tagName: 'span',
    classname: styles.slider,
  })

  const label = createElementWithClassNameAndAppendNode({
    tagName: 'label',
    children: [checkbox, slider],
    classname: styles.switch,
  })

  const handleClick = () => {
    onclick?.()
  }

  checkbox.addEventListener('click', handleClick)

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [title, label],
    classname: 'flex items-center justify-between',
  })

  return wrapper
}
