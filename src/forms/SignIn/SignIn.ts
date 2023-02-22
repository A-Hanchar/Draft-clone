import { signInByEmail } from 'api'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { Link } from 'components/Link'
import { AUTH_ERROR_CODE } from 'enums'
import { FirebaseError } from 'firebase/app'
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
      signInButton.setLoading(true)
      signInButton.setDisable(true)

      await signInByEmail({ email: emailInput.value, password: passwordInput.value })
      signInButton.setDisable(false)

      goToPageAndRenderRoute(routerPathes.documents)
    } catch (error) {
      if (error instanceof FirebaseError) {
        const { code } = error

        const errorCode = code as AUTH_ERROR_CODE

        switch (errorCode) {
          case AUTH_ERROR_CODE.USER_NOT_FOUND:
            form.setFormError('User Not Found')
            return
          case AUTH_ERROR_CODE.WRONG_PASSWORD:
            form.setFormError('Wrong password')
            return
          case AUTH_ERROR_CODE.TOO_MANY_REQUESTS:
            form.setFormError(
              'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.',
            )
            return
          default:
            form.setFormError('Unknown error.')
            return
        }
      }

      form.setFormError('Something went wrong')
    } finally {
      signInButton.setLoading(false)
    }
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
          message: 'Password is incorrect',
        },
      },
    ],
    submitButton: signInButton,
  })

  return form
}
