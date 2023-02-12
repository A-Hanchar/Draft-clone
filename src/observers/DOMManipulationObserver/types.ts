import { type ScreenBreakpoints } from 'types'

type NewManagedNodesType = {
  managedNode: Element
  checkedWindowSize: ScreenBreakpoints
} & (
  | {
      insertType: keyof Pick<ParentNode, 'append' | 'prepend'>
    }
  | {
      insertType: keyof Pick<ChildNode, 'before' | 'after'>
      beforeAfterElement: Element
    }
)

export type ManagedNodesType = NewManagedNodesType & {
  isElementDisplayed: boolean
}

export type ObserverElement = {
  observedElement: Element
  managedNodes: ManagedNodesType[]
}

export type NewObserverElement = {
  observedElement: Element
  managedNodes: NewManagedNodesType[]
}
