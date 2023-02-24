import { en } from 'langs'

import { FormEmail } from './FormEmail'
import { type FormEmailWithLabelProps } from './types'
import { FormLabelWrapper } from '../FormLabelWrapper'

export const FormEmailWithLabel = ({
  labelText = en.form.label.email,
  inputProps,
  ...restLabelProps
}: FormEmailWithLabelProps) => {
  const input = FormEmail({ ...inputProps })

  return FormLabelWrapper({ labelText, children: input, ...restLabelProps })
}
