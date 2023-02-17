import { signUpByEmail } from 'api/auth'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { Link } from 'components/Link'
import { createElementWithClassNameAndAppendNode, goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'

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
    } finally {
      signUpButton.setLoading(false)
      signUpButton.setDisable(false)
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

  return form
}
