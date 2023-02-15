import { replaceClassnameToElement } from 'helpers'

export const setButtonDisable = ({ button }: { button: HTMLButtonElement }) => {
  const disabledClasses = 'opacity-50 cursor-not-allowed'

  return (isDisable: boolean) => {
    button.disabled = isDisable

    isDisable
      ? replaceClassnameToElement({ element: button, removeClassname: 'pointer', addClassname: disabledClasses })
      : replaceClassnameToElement({ element: button, removeClassname: disabledClasses, addClassname: 'pointer' })
  }
}
