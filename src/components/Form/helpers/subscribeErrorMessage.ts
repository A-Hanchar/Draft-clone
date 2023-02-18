import { type FormErrorMessageComponent } from '../FormErrorMessage/types'
import { type FieldType } from '../types'

export const subscribeErrorMessage = ({
  errorMessageWrapper,
  field,
}: {
  field: FieldType
  errorMessageWrapper: FormErrorMessageComponent
}) => {
  const renderErrorMessage = (message: string) => {
    errorMessageWrapper.setErrorMessage(message)
    field.after(errorMessageWrapper)
  }

  return renderErrorMessage
}
