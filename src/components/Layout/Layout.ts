import { type PropsWithChildren } from 'types'

import { CommonLayout } from './components/CommonLayout'
import { WithSidebarLayout } from './components/WithSidebarLayout'
import { type LayoutType } from './types'

export const Layout: Record<LayoutType, (params: PropsWithChildren) => DocumentFragment> = {
  General: CommonLayout,
  WithSidebar: WithSidebarLayout,
}
