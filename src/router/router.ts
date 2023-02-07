import { SignIn } from 'forms/SignIn'
import { SignUp } from 'forms/SignUp'
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
    pageTitle: 'Login to drafter',
  },
  {
    path: routerPathes.signUp,
    form: SignUp,
    layoutType: 'Authorization',
    pageTitle: 'Sign Up to drafter',
  },
  {
    path: routerPathes.documents,
    content: Documents,
    layoutType: 'WithSidebar',
    childrenRoutes: [
      {
        path: routerPathes.document,
        content: Document,
      },
    ],
  },
  notFoundRoute,
]
