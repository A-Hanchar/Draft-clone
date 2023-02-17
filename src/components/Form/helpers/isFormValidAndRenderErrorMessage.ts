import { subscribeErrorMessage } from './subscribeErrorMessage'
import { type ValidationOptionsExpanded } from '../types'

export const isFormValidAndRenderErrorMessage = (checkedInputs: ValidationOptionsExpanded[]) => {
  let isValidate = true

  checkedInputs.forEach(({ field, minLength, pattern, required, errorMessageWrapper }) => {
    const renderErrorMessage = subscribeErrorMessage({ errorMessageWrapper, field })
    const value = field.value

    if (required && !value.length) {
      isValidate = false
      renderErrorMessage(required)

      return
    }

    if (minLength && value.length < minLength.value) {
      isValidate = false
      renderErrorMessage(minLength.message)

      return
    }

    if (pattern && !pattern.value.test(value)) {
      isValidate = false
      renderErrorMessage(pattern.message)
    }
  })

  return isValidate
}
