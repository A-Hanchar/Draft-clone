import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { colorsConfig } from 'variables/css'

import { FormEmail, FormEmailWithLabel } from './FormEmail'

import { FormInput, FormInputWithLabel } from './FormInput'
import { FormPassword, FormPasswordWithLabel } from './FormPassword'
import { type FormProps } from './types'

const FormRoot = ({ classname, children, bgColor = 'white', onSubmit }: FormProps) => {
  const form = createElementWithClassNameAndAppendNode({
    tagName: 'form',
    classname: getTruthyClasses(['shadow-md', 'rounded', 'px-8', 'pt-6', 'pb-8', colorsConfig.bg[bgColor], classname]),
    children,
  })

  form.onsubmit = (event: Event) => {
    event.preventDefault()

    onSubmit?.()
  }

  return form
}

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
