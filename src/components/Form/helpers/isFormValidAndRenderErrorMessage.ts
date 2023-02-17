import { subscribeErrorMessage } from './subscribeErrorMessage'
import { type FormComponents } from '../types'

export const isFormValidAndRenderErrorMessage = (formComponents: FormComponents) => {
  formComponents.fields.forEach((checkedField) => {
    const { field, minLength, pattern, required, errorMessageWrapper } = checkedField

    const renderErrorMessage = subscribeErrorMessage({ errorMessageWrapper, field })
    const value = field.value

    if (required && !value.length) {
      checkedField.isErrorMessageShow = true
      renderErrorMessage(required)

      return
    }

    if (minLength && value.length < minLength.value) {
      checkedField.isErrorMessageShow = true
      renderErrorMessage(minLength.message)

      return
    }

    if (pattern && !pattern.value.test(value)) {
      checkedField.isErrorMessageShow = true
      renderErrorMessage(pattern.message)
    }
  })

  const isFormValid = formComponents.fields.every(({ isErrorMessageShow }) => !isErrorMessageShow)

  formComponents.submitButton?.setDisable(!isFormValid)

  return isFormValid
}
