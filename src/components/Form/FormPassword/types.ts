import { type FormInputProps } from '../FormInput'
import { type FormLabelProps } from '../FormLabelWrapper'

export type FormPasswordProps = FormInputProps

export type FormPasswordWithLabelProps = Partial<FormLabelProps> & {
  inputProps?: FormPasswordProps
}
