import { LoginMethods } from 'components/LoginMethods'
import { Text } from 'components/Text'

import { type AuthorizationLayoutProps } from './types'
import { ExtendedLayout } from '../ExtendedLayout'

export const AuthorizationLayout = ({ titleText, form, withHeader = true, withFooter }: AuthorizationLayoutProps) => {
  const fragment = document.createDocumentFragment()

  fragment.append(
    Text({
      tagName: 'h1',
      classname: 'text-center text-4xl md:text-3xl',
      children: titleText,
      textTransform: 'uppercase',
      weight: 900,
    }),
    LoginMethods(),
    form,
  )

  return ExtendedLayout({
    children: fragment,
    mainNodeProps: { classname: 'flex justify-center items-center flex-col gap-10' },
    withHeader,
    withFooter,
  })
}
