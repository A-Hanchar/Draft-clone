import { type FontWeightKeys, type ColorTextKeys, type Resize } from 'variables/css'

import { type FormLabelProps } from '../FormLabelWrapper'

export type FormTextareaProps = {
  classname?: string
  weight?: FontWeightKeys
  color?: ColorTextKeys
  value?: string
  disabled?: boolean
  placeholder?: string
  maxLength?: number
  minLength?: number
  rows?: number
  resize?: Resize
  defaultValue?: string
}

export type FormTextareaWithLabelProps = Partial<FormLabelProps> & {
  textareaProps?: FormTextareaProps
}
