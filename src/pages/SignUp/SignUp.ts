import { Text } from 'components/Text'
import { SignUp as SingUpForm } from 'forms/SignUp'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { colors } from 'variables/css'

export const SignUp = () => {
  const title = Text({
    tagName: 'h1',
    classname: 'text-center text-4xl',
    innerText: 'Sign up to drafter',
    textTransform: 'uppercase',
    weight: 900,
  })

  const singUpForm = SingUpForm()

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: `text-${colors.darkGray} flex justify-center items-center h-screen flex-col gap-10`,
    children: [title, singUpForm],
  })

  return wrapper
}
