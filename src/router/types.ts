import { type ExtendedLayoutProps, type LayoutTypeKeys } from 'components/Layout'

type ContentComponent = () => Node | Promise<Node>

type RouteWithAuthorizationLayout = {
  layoutType: Extract<LayoutTypeKeys, 'Authorization'>
  titleTranslateKey: string
  form: () => HTMLFormElement
  extendedLayoutProps?: ExtendedLayoutProps
}

type RouteWithSimpleLayout = {
  layoutType: Extract<LayoutTypeKeys, 'Simple'>
  content: ContentComponent
}

type RouteWithExtensibleLayout = {
  layoutType: Extract<LayoutTypeKeys, 'WithSidebar' | 'Extended'>
  content: ContentComponent
  extendedLayoutProps?: ExtendedLayoutProps
}

export type RouterOwnObject = {
  path: string
  isProtected?: boolean
  childrenRoutes?: RouterOwnObject[]
} & (RouteWithSimpleLayout | RouteWithExtensibleLayout | RouteWithAuthorizationLayout)
