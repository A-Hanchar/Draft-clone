import { type LayoutType } from 'components/Layout'

export type RouterOwnObject = {
  path: string
  content: () => Node
  childrenRoutes?: RouterOwnObject[]
  layoutType?: LayoutType
}
