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
    classname: getTruthyClasses([
      styles.slider,
      colorsConfig.bg['neutral/75'],
      'absolute',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'rounded-xl',
      'before:absolute',
      'before:top-0.5',
      'before:left-0.5',
      'before:w-5',
      'before:h-5',
      `before:${colorsConfig.bg.white}`,
      'before:rounded-full',
    ]),
  })

  const label = createElementWithClassNameAndAppendNode({
    tagName: 'label',
    children: [checkbox, slider],
    classname: getTruthyClasses([styles.switch, 'relative', 'w-11', 'h-6', 'cursor-pointer']),
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
