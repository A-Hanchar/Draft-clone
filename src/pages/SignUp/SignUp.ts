import { AuthorizationLayout } from 'components/Layout/components/AuthorizationLayout'
import { SignUp as SingUpForm } from 'forms/SignUp'

export const SignUp = () => AuthorizationLayout({ titleText: 'Sign Up to drafter', form: SingUpForm() })
