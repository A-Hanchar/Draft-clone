import { en } from 'langs'

import { type FormEmailProps } from './types'
import { FormInput } from '../FormInput'

export const FormEmail = ({ placeholder = en.form.placeholder.email, ...restInputProps }: FormEmailProps) => {
  const inputEmail = FormInput({ inputType: 'email', placeholder, ...restInputProps })

  return inputEmail
}
