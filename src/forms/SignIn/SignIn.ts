import { signInByEmail } from 'api'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { Link } from 'components/Link'
import { createElementWithClassNameAndAppendNode, goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'
import { EMAIL_PATTERN } from 'utils'

export const SignIn = () => {
  const { labelElement: emailLabel, input: emailInput } = Form.Email.WithLabel({
    inputProps: { classname: 'w-full' },
    weight: 700,
  })
  const { labelElement: passwordLabel, input: passwordInput } = Form.Password.WithLabel({
    inputProps: { classname: 'w-full' },
    weight: 700,
  })

  const handleFormSubmit = async () => {
    try {
      await signInByEmail({ email: emailInput.value, password: passwordInput.value })

      goToPageAndRenderRoute(routerPathes.documents)
    } catch (error) {}
  }

  const signInButton = Button({
    textTransform: 'uppercase',
    children: 'sign in',
    appearanceType: 'primary',
    weight: 700,
    type: 'submit',
  })

  const signUpButton = Link({
    href: routerPathes.signUp,
    children: 'sign up',
    textTransform: 'uppercase',
    weight: 700,
    color: 'blue',
  })

  const signInControls = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex items-center justify-between',
    children: [signInButton, signUpButton],
  })

  const form = Form({
    children: [emailLabel, passwordLabel, signInControls],
    classname: 'flex flex-col gap-6 w-80',
    onSubmit: handleFormSubmit,
  })

  form.registrateFields([
    {
      field: emailInput,
      required: 'Email is required',
      pattern: {
        value: EMAIL_PATTERN,
        message: 'Email must match template: example@domain.xxx',
      },
    },
    {
      field: passwordInput,
      minLength: {
        value: 6,
        message: 'Password is incorrect',
      },
    },
  ])

  return form
}
