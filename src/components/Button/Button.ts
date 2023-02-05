import { addClassnameToElement, createElementWithClassNameAndAppendNode } from 'helpers'
import { buttonConfig, fontWeights, textTransformConfig } from 'variables/css'

import { type ButtonProps } from './types'

export const Button = ({
  children,
  classname = '',
  onclick,
  type = 'button',
  disabled = false,
  textTransform = 'none',
  rounded = true,
  weight = 400,
  ...restProps
}: ButtonProps) => {
  const button = createElementWithClassNameAndAppendNode({
    tagName: 'button',
    classname: `${buttonConfig.commonStyles} ${textTransformConfig[textTransform]} ${fontWeights[weight]} ${classname}`,
    children,
  })

  if (rounded) {
    addClassnameToElement({
      element: button,
      classname: 'rounded',
    })
  }

  if (restProps.appearanceType) {
    let addedClassname = ''
    const { appearanceType } = restProps

    if (appearanceType !== 'close') {
      addedClassname = `py-2 px-4 rounded ${buttonConfig.getClassByColorType({ colorType: appearanceType })}`
    }

    if (appearanceType === 'close') {
      const { closeButtonColor, closeButtonPosition } = restProps

      addedClassname = buttonConfig.getClassesForCloseButton({ color: closeButtonColor, position: closeButtonPosition })
    }

    addClassnameToElement({
      element: button,
      classname: addedClassname,
    })
  }

  button.type = type
  button.disabled = disabled

  const handleClick = (event: Event) => {
    event.preventDefault()

    onclick?.()
  }

  button.addEventListener('click', handleClick)

  return button
}
