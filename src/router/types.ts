export type RouterOwnObject = {
  path: string
  content: () => Node
  childrenRoutes?: RouterOwnObject[]
}
