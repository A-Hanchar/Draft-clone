import { createElementWithClassNameAndAppendNode } from 'helpers'

import { setButtonContent, setButtonDisable, setButtonLoading } from './helpers'

import { type ButtonComponent, type ButtonProps } from './types'
import { useGetButtonClasses } from './useGetButtonClasses'

export const Button = ({
  children,
  classname,
  onclick,
  type = 'button',
  disabled = false,
  textTransform,
  rounded,
  weight,
  loading = false,
  ...restProps
}: ButtonProps): ButtonComponent => {
  const buttonClasses = useGetButtonClasses({ classname, rounded, textTransform, weight, ...restProps })
  const buttonContent = setButtonContent({ initialContent: children })

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
    setContent: buttonContent.setContent,
  })
}
