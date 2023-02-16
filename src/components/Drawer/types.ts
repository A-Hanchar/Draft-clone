import { type PropsWithChildren } from 'types'

export type DrawerProps = PropsWithChildren<{ title: string; onCancel?: () => void }>
