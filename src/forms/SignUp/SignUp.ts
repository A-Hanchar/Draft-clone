import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Link } from 'components/Link'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { routerPathes } from 'router'

export const SignUp = () => {
  const commonInputClassname =
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3'
  const commonLabelClassname = 'block text-gray-700 text-sm font-bold mb-2'

  const emailInput = Input({
    className: commonInputClassname,
    id: 'email',
    type: 'email',
    placeholder: 'apple@google.com',
    labelClassName: commonLabelClassname,
    labelInnerText: 'Email',
  })

  const passwordInput = Input({
    className: commonInputClassname,
    id: 'password',
    type: 'password',
    placeholder: '******************',
    labelClassName: commonLabelClassname,
    labelInnerText: 'Password',
  })

  const signUpButton = Button({
    classname:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
    textTransform: 'uppercase',
    children: 'sign up',
  })

  const signInButton = Link({
    classname: 'text-blue-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline',
    href: routerPathes.signIn,
    children: 'sign in',
    textTransform: 'uppercase',
    weight: 700,
  })

  const signUpControls = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex items-center justify-between',
    children: [signUpButton, signInButton],
  })

  const signUpForm = createElementWithClassNameAndAppendNode({
    tagName: 'form',
    classname: 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-6',
    children: [emailInput, passwordInput, signUpControls],
  })

  return signUpForm
}
