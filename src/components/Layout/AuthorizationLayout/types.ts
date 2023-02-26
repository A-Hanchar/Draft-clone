import { type ExtendedLayoutProps } from '../ExtendedLayout'

export type AuthorizationLayoutProps = {
  titleTranslateKey: string
  form: HTMLFormElement
}

export type AuthorizationLayoutOwnProps = ExtendedLayoutProps & AuthorizationLayoutProps
