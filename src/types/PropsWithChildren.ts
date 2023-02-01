import { type ChildrenNode } from './ChildrenNode'

export type PropsWithChildren<P = unknown> = P & { children?: ChildrenNode }
