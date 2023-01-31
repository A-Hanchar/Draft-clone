import { Document, Documents, Home, NotFound, SignIn, SignUp } from 'pages'

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
    content: SignIn,
  },
  {
    path: routerPathes.signUp,
    content: SignUp,
  },
  {
    path: routerPathes.documents,
    content: Documents,
    childrenRoutes: [
      {
        path: routerPathes.document,
        content: Document,
      },
    ],
  },
  notFoundRoute,
]
