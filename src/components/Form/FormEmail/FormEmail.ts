import { t } from 'i18n'

import { type FormEmailProps } from './types'
import { FormInput } from '../FormInput'

export const FormEmail = ({ placeholder = t('form.placeholder.email'), ...restInputProps }: FormEmailProps) => {
  const inputEmail = FormInput({ inputType: 'email', placeholder, ...restInputProps })

  return inputEmail
}
