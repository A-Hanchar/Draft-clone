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

        return
      }
    }

    let fullContent: HTMLElement | DocumentFragment | string = ''

    const { layoutType } = route

    if (layoutType === 'Authorization') {
      const { titleTranslateKey, form, extendedLayoutProps } = route

      fullContent = Layout.Authorization({
        titleTranslateKey,
        form: form(),
        withHeader: extendedLayoutProps?.withHeader,
        withFooter: extendedLayoutProps?.withFooter,
      })
    }

    if (layoutType === 'Extended' || layoutType === 'WithSidebar') {
      const pageContent = await route.content()

      const { extendedLayoutProps } = route

      fullContent = Layout[route.layoutType]({
        children: pageContent,
        withHeader: extendedLayoutProps?.withHeader,
        withFooter: extendedLayoutProps?.withFooter,
      })
    }

    if (layoutType === 'Simple') {
      const pageContent = await route.content()

      fullContent = Layout.Simple({ children: pageContent })
    }

    Body.replaceChildren(fullContent)
  })
}
