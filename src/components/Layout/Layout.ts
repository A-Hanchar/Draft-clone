import { AuthorizationLayout } from './AuthorizationLayout'

import { ExtendedLayout } from './ExtendedLayout'
import { RootLayout } from './RootLayout'
import { WithSidebarLayout } from './WithSidebarLayout'
import { type LayoutType } from './types'

export const Layout: LayoutType = {
  Simple: RootLayout,
  Authorization: AuthorizationLayout,
  WithSidebar: WithSidebarLayout,
  Extended: ExtendedLayout,
}
