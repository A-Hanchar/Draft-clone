import { Body } from 'components/Body'
import { Layout } from 'components/Layout'

import { routerPathes } from './routerPathes'
import { getRoute } from './utils'

export const renderComponent = () => {
  const { content, path, layoutType = 'General' } = getRoute()

  if (path === routerPathes.notFound) {
    window.history.pushState({}, '', routerPathes.notFound)
  }

  Body.replaceChildren(Layout[layoutType]({ children: content() }))
}
