import { type ColorTextKeys, type FontWeightKeys } from 'variables/css'

import { type FormLabelProps } from '../FormLabelWrapper'

type FormInputType = 'email' | 'number' | 'password' | 'search' | 'submit' | 'text' | 'button' | 'hidden' | 'checkbox'

export type FormInputProps = {
  classname?: string
  id?: string
  placeholder?: string
  weight?: FontWeightKeys
  color?: ColorTextKeys
  checked: boolean
}

export type FormInputCurrentProps = FormInputProps & {
  inputType?: FormInputType
}

export type FormInputWithLabelProps = FormLabelProps & {
  inputProps?: FormInputProps
}
