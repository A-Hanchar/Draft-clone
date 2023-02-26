import { LoginMethods } from 'components/LoginMethods'
import { Text } from 'components/Text'

import { t } from 'i18n'

import { type AuthorizationLayoutOwnProps } from './types'
import { ExtendedLayout } from '../ExtendedLayout'

export const AuthorizationLayout = ({
  titleTranslateKey,
  form,
  withHeader,
  withFooter,
}: AuthorizationLayoutOwnProps) => {
  const fragment = document.createDocumentFragment()

  fragment.append(
    Text({
      tagName: 'h1',
      classname: 'text-center text-4xl md:text-3xl',
      children: t(titleTranslateKey),
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
