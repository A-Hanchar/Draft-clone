import { t } from 'i18n'

import { FormPassword } from './FormPassword'
import { type FormPasswordWithLabelProps } from './types'
import { FormLabelWrapper } from '../FormLabelWrapper'

export const FormPasswordWithLabel = ({
  labelText = t('form.label.password'),
  inputProps,
  ...restLabelProps
}: FormPasswordWithLabelProps) => {
  const input = FormPassword({ ...inputProps })

  return FormLabelWrapper({ labelText, children: input, ...restLabelProps })
}
