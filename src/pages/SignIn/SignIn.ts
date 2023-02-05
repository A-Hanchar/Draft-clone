import { Text } from 'components/Text'
import { SignIn as SingInForm } from 'forms/SignIn'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { colorsConfig } from 'variables/css'

export const SignIn = () => {
  const title = Text({
    tagName: 'h1',
    classname: 'text-center text-4xl',
    innerText: 'Login to drafter',
    textTransform: 'uppercase',
    weight: 900,
  })

  const singInForm = SingInForm()

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `${colorsConfig.text.darkGray} flex justify-center items-center h-screen flex-col gap-10`,
    children: [title, singInForm],
  })

  return wrapper
}
