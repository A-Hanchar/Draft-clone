import { Form } from 'components/Form'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { colorsConfig } from 'variables/css'

import { ShowChecked } from './helpers'

import styles from './styles.module.css'

import { type ToggleSwitchProps } from './type'

export const ToggleSwitch = ({ name, keyLocalStorage, onclick }: ToggleSwitchProps) => {
  const title = Text({ tagName: 'span', children: name })

  const checkbox = Form.Input({
    inputType: 'checkbox',
    classname: 'hidden',
    checked: ShowChecked(keyLocalStorage),
  })

  const slider = Text({
    tagName: 'span',
    classname: getTruthyClasses([styles.slider, colorsConfig.bg.lightGray]),
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
