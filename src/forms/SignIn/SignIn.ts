import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { createElementWithClassNameAndAppendNode } from 'helpers'

export const SignIn = () => {
  const emailInput = Input({
    input: {
      className:
        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3',
      id: 'email',
      type: 'email',
      placeholder: 'apple@google.com',
    },
    label: {
      className: 'block text-gray-700 text-sm font-bold mb-2',
      innerText: 'Email',
    },
  })

  const passwordInput = Input({
    input: {
      className:
        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3',
      id: 'password',
      type: 'password',
      placeholder: '******************',
    },
    label: {
      className: 'block text-gray-700 text-sm font-bold mb-2',
      innerText: 'Password',
    },
  })

  const signInButton = Button({
    classname:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
    color: 'primary',
    innerText: 'SIGN IN',
  })

  const signUpButton = Button({
    classname:
      'bg-white hover:bg-white text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
    innerText: 'SIGN UP',
  })

  const loginControls = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex items-center justify-between',
    children: [signInButton, signUpButton],
  })

  const loginForm = createElementWithClassNameAndAppendNode({
    tagName: 'form',
    classname: 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-6',
    children: [emailInput, passwordInput, loginControls],
  })

  return loginForm
}
