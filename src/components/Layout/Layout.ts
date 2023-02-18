import { AuthorizationLayout } from './components/AuthorizationLayout'

import { CommonLayout } from './components/CommonLayout'
import { DocumentLayout } from './components/DocumentLayout'
import { WithSidebarLayout } from './components/WithSidebarLayout'
import { type LayoutType } from './types'

export const Layout: LayoutType = {
  General: CommonLayout,
  WithSidebar: WithSidebarLayout,
  Authorization: AuthorizationLayout,
  Document: DocumentLayout,
}
