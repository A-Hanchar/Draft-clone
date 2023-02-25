import { signUpByEmail } from 'api/auth'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { Link } from 'components/Link'
import { AUTH_ERROR_CODE } from 'enums'
import { FirebaseError } from 'firebase/app'
import { createElementWithClassNameAndAppendNode, goToPageAndRenderRoute } from 'helpers'
import { t } from 'i18n'
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
            form.setFormError(t('error.emailAlreadyInUse'))
            return
          case AUTH_ERROR_CODE.WEAK_PASSWORD:
            form.setFormError(t('error.weakPassword'))
            return
          default:
            form.setFormError(t('error.unknownError'))
            return
        }
      }

      form.setFormError(t('error.somethingWentWrong'))
    } finally {
      signUpButton.setLoading(false)
    }
  }

  const signUpButton = Button({
    textTransform: 'uppercase',
    children: t('button.signUp'),
    appearanceType: 'primary',
    weight: 700,
    type: 'submit',
  })

  const signInButton = Link({
    href: routerPathes.signIn,
    children: t('button.signIn'),
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
    submitButton: signUpButton,
  })

  return form
}
