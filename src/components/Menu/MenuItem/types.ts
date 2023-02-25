export type MenuItem<T> = {
  key: T
  title: string
}

export type MenuItemProps<T> = MenuItem<T> & {
  onclick: () => void
}
