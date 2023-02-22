import { signUpByEmail } from 'api/auth'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { Link } from 'components/Link'
import { AUTH_ERROR_CODE } from 'enums'
import { FirebaseError } from 'firebase/app'
import { createElementWithClassNameAndAppendNode, goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'
import { EMAIL_PATTERN } from 'utils'

export const SignUp = () => {
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
      signUpButton.setLoading(true)
      signUpButton.setDisable(true)

      await signUpByEmail({ email: emailInput.value, password: passwordInput.value })

      goToPageAndRenderRoute(routerPathes.documents)
    } catch (error) {
      if (error instanceof FirebaseError) {
        const { code } = error

        const errorCode = code as AUTH_ERROR_CODE

        switch (errorCode) {
          case AUTH_ERROR_CODE.EMAIL_ALREADY_IN_USE:
            form.setFormError('User with this email exist')
            return
          case AUTH_ERROR_CODE.WEAK_PASSWORD:
            form.setFormError('Password should be at least 6 characters')
            return
          default:
            form.setFormError('Unknown error.')
            return
        }
      }

      form.setFormError('Something went wrong')
    } finally {
      signUpButton.setLoading(false)
    }
  }

  const signUpButton = Button({
    textTransform: 'uppercase',
    children: 'sign up',
    appearanceType: 'primary',
    weight: 700,
    type: 'submit',
  })

  const signInButton = Link({
    href: routerPathes.signIn,
    children: 'sign in',
    textTransform: 'uppercase',
    weight: 700,
    color: 'blue',
  })

  const signUpControls = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex items-center justify-between',
    children: [signUpButton, signInButton],
  })

  const form = Form({
    children: [emailLabel, passwordLabel, signUpControls],
    classname: 'flex flex-col gap-6 w-80',
    onSubmit: handleFormSubmit,
  })

  form.registrateFields({
    fields: [
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
          message: 'Password should be at least 6 characters',
        },
      },
    ],
    submitButton: signUpButton,
  })

  return form
}
