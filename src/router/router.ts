import { SignIn } from 'forms/SignIn'
import { SignUp } from 'forms/SignUp'
import { en } from 'langs'
import { Document, Documents, Home, NotFound } from 'pages'

import { routerPathes } from './routerPathes'
import { type RouterOwnObject } from './types'

export const rootRoute: RouterOwnObject = {
  path: routerPathes.home,
  content: Home,
}

export const notFoundRoute: RouterOwnObject = {
  path: routerPathes.notFound,
  content: NotFound,
}

export const router: RouterOwnObject[] = [
  rootRoute,
  {
    path: routerPathes.signIn,
    form: SignIn,
    layoutType: 'Authorization',
    pageTitle: en.signInPage.title,
  },
  {
    path: routerPathes.signUp,
    form: SignUp,
    layoutType: 'Authorization',
    pageTitle: en.signUpPage.title,
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
        layoutType: 'Document',
        isProtected: true,
      },
    ],
  },
  notFoundRoute,
]
