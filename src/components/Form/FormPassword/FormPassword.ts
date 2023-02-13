import { type FormPasswordProps } from './types'
import { FormInput } from '../FormInput'

export const FormPassword = ({ placeholder = '******************', ...restInputProps }: FormPasswordProps) => {
  const inputEmail = FormInput({ inputType: 'password', placeholder, ...restInputProps })

  return inputEmail
}
