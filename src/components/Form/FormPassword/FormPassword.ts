import { t } from 'i18n'

import { type FormPasswordProps } from './types'
import { FormInput } from '../FormInput'

export const FormPassword = ({
  placeholder = t('form.placeholder.password'),
  ...restInputProps
}: FormPasswordProps) => {
  const inputEmail = FormInput({ inputType: 'password', placeholder, ...restInputProps })

  return inputEmail
}
