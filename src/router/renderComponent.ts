import { auth } from 'api'
import { Body } from 'components/Body'
import { Layout } from 'components/Layout'
import { goToPageAndRenderRoute } from 'helpers'
import { Loading } from 'pages'

import { routerPathes } from './routerPathes'
import { getRoute } from './utils'

export const renderComponent = () => {
  Body.replaceChildren(Loading())

  const route = getRoute()

  const { path } = route

  if (path === routerPathes.notFound) {
    window.history.pushState({}, '', routerPathes.notFound)
  }

  auth.onAuthStateChanged(async (user) => {
    if (route.isProtected && path !== routerPathes.home) {
      if (!user) {
        goToPageAndRenderRoute(routerPathes.home)
      }
    }

    if (route.layoutType === 'Authorization') {
      const { pageTitle, form } = route

      Body.replaceChildren(Layout.Authorization({ titleText: pageTitle, form: form() }))

      return
    }

    const pageContent = await route.content()

    Body.replaceChildren(Layout[route.layoutType ?? 'General']({ children: pageContent }))
  })
}
