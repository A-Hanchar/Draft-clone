import { type FormInputProps } from '../FormInput'
import { type FormLabelProps } from '../FormLabelWrapper'

export type FormEmailProps = FormInputProps

export type FormEmailWithLabelProps = Partial<FormLabelProps> & {
  inputProps: FormEmailProps
}
