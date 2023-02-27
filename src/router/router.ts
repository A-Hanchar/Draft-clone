import { SignIn } from 'forms/SignIn'
import { SignUp } from 'forms/SignUp'
import { Document, Documents, Home, NotFound } from 'pages'

import { routerPathes } from './routerPathes'
import { type RouterOwnObject } from './types'

export const rootRoute: RouterOwnObject = {
  path: routerPathes.home,
  content: Home,
  layoutType: 'Extended',
  extendedLayoutProps: {
    withFooter: true,
  },
}

export const notFoundRoute: RouterOwnObject = {
  path: routerPathes.notFound,
  content: NotFound,
  layoutType: 'Simple',
}

export const router: RouterOwnObject[] = [
  rootRoute,
  {
    path: routerPathes.signIn,
    form: SignIn,
    layoutType: 'Authorization',
    titleTranslateKey: 'signInPage.title',
  },
  {
    path: routerPathes.signUp,
    form: SignUp,
    layoutType: 'Authorization',
    titleTranslateKey: 'signUpPage.title',
  },
  {
    path: routerPathes.documents,
    content: Documents,
    layoutType: 'WithSidebar',
    isProtected: true,
    childrenRoutes: [
      {
        path: routerPathes.document,
        content: Document,
        layoutType: 'Simple',
        isProtected: true,
      },
    ],
  },
  notFoundRoute,
]
