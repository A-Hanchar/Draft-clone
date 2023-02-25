import { type ExtendedLayoutProps, type LayoutType } from 'components/Layout'

type ContentComponent = () => Node | Promise<Node>

type RouteWithAuthorizationLayout = {
  layoutType: Extract<keyof LayoutType, 'Authorization'>
  pageTitle: string
  form: () => HTMLFormElement
  extendedLayoutProps?: ExtendedLayoutProps
}

type RouteWithSimpleLayout = {
  layoutType: Extract<keyof LayoutType, 'Simple'>
  content: ContentComponent
}

type RouteWithExtensibleLayout = {
  layoutType: Extract<keyof LayoutType, 'WithSidebar' | 'Extended'>
  content: ContentComponent
  extendedLayoutProps?: ExtendedLayoutProps
}

export type RouterOwnObject = {
  path: string
  isProtected?: boolean
  childrenRoutes?: RouterOwnObject[]
} & (RouteWithSimpleLayout | RouteWithExtensibleLayout | RouteWithAuthorizationLayout)
