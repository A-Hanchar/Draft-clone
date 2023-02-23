import { FormTextarea } from './FormTextarea'
import { type FormTextareaWithLabelProps } from './types'
import { FormLabelWrapper } from '../FormLabelWrapper'

export const FormTextareaWithLabel = ({
  labelText = '',
  textareaProps,
  ...restLabelProps
}: FormTextareaWithLabelProps) => {
  const textarea = FormTextarea({ ...textareaProps })

  const { labelElement, input } = FormLabelWrapper({ labelText, children: textarea, ...restLabelProps })

  return { labelElement, textarea: input }
}
