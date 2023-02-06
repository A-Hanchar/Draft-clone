import { Body } from 'components/Body'
import { Layout } from 'components/Layout'

import { routerPathes } from './routerPathes'
import { getRoute } from './utils'

export const renderComponent = () => {
  const route = getRoute()

  const { path } = route

  if (path === routerPathes.notFound) {
    window.history.pushState({}, '', routerPathes.notFound)
  }

  if (route.layoutType === 'Authorization') {
    const { pageTitle, form } = route

    Body.replaceChildren(Layout.Authorization({ titleText: pageTitle, form: form() }))

    return
  }

  Body.replaceChildren(Layout[route.layoutType ?? 'General']({ children: route.content() }))
}
