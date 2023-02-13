import { type ColorTextKeys, type FontWeightKeys } from 'variables/css'

export type FormLabelProps = {
  labelText: string
  labelClassname?: string
  type?: 'row' | 'column'
  weight?: FontWeightKeys
  color?: ColorTextKeys
}

export type FormLabelWrapperProps = FormLabelProps & {
  children: HTMLInputElement
}
