import { type LayoutTypeKeys } from 'components/Layout'

export type RouterOwnObject = {
  path: string
  childrenRoutes?: RouterOwnObject[]
} & (
  | {
      layoutType?: Exclude<LayoutTypeKeys, 'Authorization'>
      content: () => Node
    }
  | {
      layoutType: Extract<LayoutTypeKeys, 'Authorization'>
      pageTitle: string
      form: () => HTMLFormElement
    }
)
