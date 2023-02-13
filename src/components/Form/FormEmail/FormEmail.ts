import { type FormEmailProps } from './types'
import { FormInput } from '../FormInput'

export const FormEmail = ({ placeholder = 'apple@google.com', ...restInputProps }: FormEmailProps) => {
  const inputEmail = FormInput({ inputType: 'email', placeholder, ...restInputProps })

  return inputEmail
}
