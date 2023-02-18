import { FormEmail, FormEmailWithLabel } from './FormEmail'

import { FormInput, FormInputWithLabel } from './FormInput'
import { FormPassword, FormPasswordWithLabel } from './FormPassword'
import { FormRoot } from './FormRoot'

export const Form = Object.assign(FormRoot, {
  Input: Object.assign(FormInput, {
    WithLabel: FormInputWithLabel,
  }),
  Email: Object.assign(FormEmail, {
    WithLabel: FormEmailWithLabel,
  }),
  Password: Object.assign(FormPassword, {
    WithLabel: FormPasswordWithLabel,
  }),
})
