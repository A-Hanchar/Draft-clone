import { FormPassword } from './FormPassword'
import { type FormPasswordWithLabelProps } from './types'
import { FormLabelWrapper } from '../FormLabelWrapper'

export const FormPasswordWithLabel = ({
  labelText = 'Password',
  inputProps,
  ...restLabelProps
}: FormPasswordWithLabelProps) => {
  const input = FormPassword({ ...inputProps })

  return FormLabelWrapper({ labelText, children: input, ...restLabelProps })
}
