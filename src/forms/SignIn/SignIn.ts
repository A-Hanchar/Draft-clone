import { signInByEmail } from 'api'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { Link } from 'components/Link'
import { AUTH_ERROR_CODE } from 'enums'
import { FirebaseError } from 'firebase/app'
import { createElementWithClassNameAndAppendNode, goToPageAndRenderRoute } from 'helpers'
import { t } from 'i18n'
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
            form.setFormError(t('error.userNotFound'))
            return
          case AUTH_ERROR_CODE.WRONG_PASSWORD:
            form.setFormError(t('error.wrongPassword'))
            return
          case AUTH_ERROR_CODE.TOO_MANY_REQUESTS:
            form.setFormError(t('error.manyFailedLoginAttempts'))
            return
          default:
            form.setFormError(t('error.unknownError'))
            return
        }
      }

      form.setFormError(t('error.somethingWentWrong'))
    } finally {
      signInButton.setLoading(false)
    }
  }

  const signInButton = Button({
    textTransform: 'uppercase',
    children: t('form.signIn.signInButton'),
    appearanceType: 'primary',
    weight: 700,
    type: 'submit',
  })

  const signUpButton = Link({
    href: routerPathes.signUp,
    children: t('form.signIn.signUpButton'),
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
        required: t('form.validation.email.required'),
        pattern: {
          value: EMAIL_PATTERN,
          message: t('form.validation.email.pattern'),
        },
      },
      {
        field: passwordInput,
        minLength: {
          value: 6,
          message: t('form.validation.password.minLength'),
        },
      },
    ],
    submitButton: signInButton,
  })

  return form
}
