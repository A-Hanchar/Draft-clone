import { FormEmail } from './FormEmail'
import { type FormEmailWithLabelProps } from './types'
import { FormLabelWrapper } from '../FormLabelWrapper'

export const FormEmailWithLabel = ({ labelText = 'Email', inputProps, ...restLabelProps }: FormEmailWithLabelProps) => {
  const input = FormEmail({ ...inputProps })

  return FormLabelWrapper({ labelText, children: input, ...restLabelProps })
}
