/* eslint-disable @typescript-eslint/no-misused-promises */
import { createElementWithClassNameAndAppendNode } from 'helpers'

import { setButtonDisable, setButtonLoading } from './helpers'

import { type ButtonProps } from './types'
import { useGetButtonClasses } from './useGetButtonClasses'

export const Button = ({
  children = '',
  classname,
  onclick,
  type = 'button',
  disabled = false,
  textTransform,
  rounded,
  weight,
  loading = false,
  ...restProps
}: ButtonProps) => {
  const buttonClasses = useGetButtonClasses({ classname, disabled, rounded, textTransform, weight, ...restProps })

  const buttonContent = createElementWithClassNameAndAppendNode({ tagName: 'div', children })

  const button = createElementWithClassNameAndAppendNode({
    tagName: 'button',
    classname: buttonClasses,
    children: buttonContent,
  })

  const setLoading = setButtonLoading({ button, buttonContent, rounded })
  const setDisable = setButtonDisable({ button })

  button.type = type

  const handleClick = () => {
    onclick?.()
  }

  button.addEventListener('click', handleClick)

  setLoading(loading)
  setDisable(disabled)

  return Object.assign(button, {
    setLoading,
    setDisable,
  })
}
