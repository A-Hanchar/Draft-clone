import { type ButtonComponent } from 'components/Button'

import { FormErrorMessage } from '../FormErrorMessage'
import { type FormComponents, type ValidationOptions, type ValidationOptionsExpanded } from '../types'

export const registrateFields = () => {
  const formFields: FormComponents = {
    fields: [],
  }

  const subscribeFields = ({
    fields,
    submitButton,
  }: {
    fields: ValidationOptions[]
    submitButton?: ButtonComponent
  }) => {
    formFields.submitButton = submitButton

    const fieldsExpanded: ValidationOptionsExpanded[] = fields.map(({ field, ...restFieldProps }) => {
      const errorMessageWrapper = FormErrorMessage()

      return {
        field,
        errorMessageWrapper,
        isErrorMessageShow: false,
        ...restFieldProps,
      }
    })

    formFields.fields.push(...fieldsExpanded)

    formFields.fields.forEach((checkedField) => {
      checkedField.field.addEventListener('input', () => {
        const nextSibling = checkedField.field.nextElementSibling

        if (nextSibling && nextSibling === checkedField.errorMessageWrapper) {
          checkedField.errorMessageWrapper.remove()
          checkedField.isErrorMessageShow = false

          const isFormValid = formFields.fields.every(({ isErrorMessageShow }) => !isErrorMessageShow)

          formFields.submitButton?.setDisable(!isFormValid)
        }
      })
    })
  }

  const getSubmitButton = () => formFields.submitButton

  return {
    formFields,
    subscribeFields,
    getSubmitButton,
  }
}
