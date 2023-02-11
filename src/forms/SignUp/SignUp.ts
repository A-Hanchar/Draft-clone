import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { Link } from 'components/Link'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { routerPathes } from 'router'

export const SignUp = () => {
  const { labelElement: emailLabel } = Form.Email.WithLabel({
    inputProps: { classname: 'w-full' },
    weight: 700,
  })
  const { labelElement: passwordLabel } = Form.Password.WithLabel({
    inputProps: { classname: 'w-full' },
    weight: 700,
  })

  const signUpButton = Button({
    textTransform: 'uppercase',
    children: 'sign up',
    appearanceType: 'primary',
    weight: 700,
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
  })

  return form
}
