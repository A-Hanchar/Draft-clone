import { t } from 'i18n'

import { FormEmail } from './FormEmail'
import { type FormEmailWithLabelProps } from './types'
import { FormLabelWrapper } from '../FormLabelWrapper'

export const FormEmailWithLabel = ({
  labelText = t('form.label.email'),
  inputProps,
  ...restLabelProps
}: FormEmailWithLabelProps) => {
  const input = FormEmail({ ...inputProps })

  return FormLabelWrapper({ labelText, children: input, ...restLabelProps })
}
