import { type PropsWithChildren } from 'types'

import { type AuthorizationLayoutProps } from './components/AuthorizationLayout/types'

export type LayoutTypeKeys = 'General' | 'WithSidebar' | 'Authorization' | 'Document'

export type LayoutType = {
  General: (params: PropsWithChildren) => DocumentFragment
  WithSidebar: (params: PropsWithChildren) => DocumentFragment
  Authorization: (params: AuthorizationLayoutProps) => DocumentFragment
  Document: (params: PropsWithChildren) => DocumentFragment
}
