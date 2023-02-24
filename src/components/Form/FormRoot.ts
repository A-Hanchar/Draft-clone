import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { colorsConfig } from 'variables/css'

import { isFormValidAndRenderErrorMessage, registrateFields, useFormError } from './helpers'
import { type FormProps } from './types'

export const FormRoot = ({ classname, children, bgColor = 'white', onSubmit }: FormProps) => {
  const { formFields, subscribeFields, getSubmitButton } = registrateFields()

  const form = createElementWithClassNameAndAppendNode({
    tagName: 'form',
    classname: getTruthyClasses(['shadow-md rounded px-8 pt-6 pb-8', colorsConfig.bg[bgColor], classname]),
    children,
  })
  form.noValidate = true

  form.onsubmit = (event: Event) => {
    event.preventDefault()

    const isFormValid = isFormValidAndRenderErrorMessage(formFields)

    if (isFormValid) {
      onSubmit?.()
    }
  }

  const { setFormError } = useFormError({ getSubmitButton, form })

  return Object.assign(form, {
    registrateFields: subscribeFields,
    setFormError,
  })
}
