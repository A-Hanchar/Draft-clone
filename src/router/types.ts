import { type LayoutTypeKeys } from 'components/Layout'

export type RouterOwnObject = {
  path: string
  isProtected?: boolean
  childrenRoutes?: RouterOwnObject[]
} & (
  | {
      layoutType?: Exclude<LayoutTypeKeys, 'Authorization'>
      content: () => Node | Promise<Node>
    }
  | {
      layoutType: Extract<LayoutTypeKeys, 'Authorization'>
      pageTitle: string
      form: () => HTMLFormElement
    }
)
