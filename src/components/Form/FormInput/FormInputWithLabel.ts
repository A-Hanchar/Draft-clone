import { FormInput } from './FormInput'
import { type FormInputWithLabelProps } from './types'
import { FormLabelWrapper } from '../FormLabelWrapper'

export const FormInputWithLabel = ({ inputProps, ...labelProps }: FormInputWithLabelProps) => {
  const input = FormInput({ ...inputProps })

  return FormLabelWrapper({ children: input, ...labelProps })
}
