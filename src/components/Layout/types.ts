import { type AuthorizationLayout } from './AuthorizationLayout'

import { type ExtendedLayout } from './ExtendedLayout'
import { type RootLayout } from './RootLayout'
import { type WithSidebarLayout } from './WithSidebarLayout'

export type LayoutType = {
  Simple: typeof RootLayout
  WithSidebar: typeof WithSidebarLayout
  Authorization: typeof AuthorizationLayout
  Extended: typeof ExtendedLayout
}
