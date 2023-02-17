import { FormErrorMessage } from '../FormErrorMessage'
import { type ValidationOptions, type ValidationOptionsExpanded } from '../types'

export const registrateFields = () => {
  const checkedFields: ValidationOptionsExpanded[] = []

  const subscribeFields = (values: ValidationOptions[]) => {
    const valuesExpanded: ValidationOptionsExpanded[] = values.map(({ field, ...restFieldProps }) => {
      const errorMessageWrapper = FormErrorMessage()

      field.addEventListener('input', () => {
        const nextSibling = field.nextElementSibling

        if (nextSibling && nextSibling === errorMessageWrapper) {
          errorMessageWrapper.remove()
        }
      })

      return {
        field,
        errorMessageWrapper,
        ...restFieldProps,
      }
    })

    checkedFields.push(...valuesExpanded)
  }

  return {
    checkedFields,
    subscribeFields,
  }
}
