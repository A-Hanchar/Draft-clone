import { addClassnameToElement, removeClassnameFromElement } from 'helpers'

import { ButtonLoader } from '../ButtonLoading'

export const setButtonLoading = ({
  button,
  rounded,
  buttonContent,
}: {
  button: HTMLButtonElement
  rounded?: boolean
  buttonContent: HTMLDivElement
}) => {
  const buttonLoading = ButtonLoader({ rounded })

  return (isLoading: boolean) => {
    if (isLoading) {
      addClassnameToElement({ element: button, classname: 'relative' })
      addClassnameToElement({ element: buttonContent, classname: 'invisible' })

      button.append(buttonLoading)

      return
    }

    removeClassnameFromElement({ element: buttonContent, classname: 'invisible' })
    removeClassnameFromElement({ element: button, classname: 'relative' })
    buttonLoading.remove()
  }
}
