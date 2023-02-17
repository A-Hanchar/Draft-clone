import { Text } from 'components/Text'

import { type FormErrorMessageComponent } from './types'

export const FormErrorMessage = (): FormErrorMessageComponent => {
  const errorMessage = Text({ tagName: 'p', color: 'red' })

  const setErrorMessage = (newErrorMessage: string) => {
    errorMessage.replaceChildren(newErrorMessage)
  }

  return Object.assign(errorMessage, {
    setErrorMessage,
  })
}
