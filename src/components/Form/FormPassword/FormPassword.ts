import { en } from 'langs'

import { type FormPasswordProps } from './types'
import { FormInput } from '../FormInput'

export const FormPassword = ({ placeholder = en.form.placeholder.password, ...restInputProps }: FormPasswordProps) => {
  const inputEmail = FormInput({ inputType: 'password', placeholder, ...restInputProps })

  return inputEmail
}
