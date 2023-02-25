import { type ButtonComponent } from 'components/Button'

import { FormErrorMessage } from '../FormErrorMessage'

export const useFormError = ({
  getSubmitButton,
  form,
}: {
  getSubmitButton: () => ButtonComponent | undefined
  form: HTMLFormElement
}) => {
  let isErrorShow = false
  const formErrorMessage = FormErrorMessage()

  const setDisableSubmitButton = (value: boolean) => {
    const submitButton = getSubmitButton()
    submitButton?.setDisable(value)
  }

  const setFormError = (errorMessage: string) => {
    formErrorMessage.setErrorMessage(errorMessage)
    setDisableSubmitButton(true)

    form.append(formErrorMessage)
    isErrorShow = true
  }

  const removeFormError = () => {
    setDisableSubmitButton(false)
    formErrorMessage.remove()

    isErrorShow = false
  }

  form.addEventListener('input', () => {
    if (isErrorShow) {
      removeFormError()
    }
  })

  return { setFormError }
}
