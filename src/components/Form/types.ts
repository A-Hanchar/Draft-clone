import { type ButtonComponent } from 'components/Button'
import { type ChildrenNode } from 'types'
import { type ColorBackgroundKeys } from 'variables/css'

import { type FormErrorMessageComponent } from './FormErrorMessage/types'

export type FormProps = {
  classname?: string
  children?: ChildrenNode | Array<ChildrenNode | undefined>
  bgColor?: ColorBackgroundKeys
  onSubmit?: () => void
}

type ValidationValue = number | RegExp

type ValidationRule<T extends ValidationValue = ValidationValue> = {
  value: T
  message: string
}

export type FieldType = HTMLInputElement | HTMLTextAreaElement

export type ValidationOptions = {
  field: FieldType

  required?: string
  minLength?: ValidationRule<number>
  pattern?: ValidationRule<RegExp>
}

export type ValidationOptionsExpanded = ValidationOptions & {
  errorMessageWrapper: FormErrorMessageComponent
  isErrorMessageShow: boolean
}

export type FormComponents = {
  fields: ValidationOptionsExpanded[]
  submitButton?: ButtonComponent
}
