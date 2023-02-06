import { AuthorizationLayout } from 'components/Layout/components/AuthorizationLayout'
import { SignIn as SignInForm } from 'forms/SignIn'

export const SignIn = () => AuthorizationLayout({ titleText: 'Login to drafter', form: SignInForm() })
