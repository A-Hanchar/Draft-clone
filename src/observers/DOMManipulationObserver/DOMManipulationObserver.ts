/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { isClientWidthAboveSize } from 'helpers'

import { type ManagedNodesType, type NewObserverElement, type ObserverElement } from './types'

export class DOMManipulationObserver {
  observers: ObserverElement[]

  constructor() {
    this.observers = []
  }

  subscribe(subscriber: NewObserverElement) {
    const updatedManagedNodes: ManagedNodesType[] = subscriber.managedNodes.map(
      ({ checkedWindowSize, ...restNodeProps }) => ({
        checkedWindowSize,
        isElementDisplayed: isClientWidthAboveSize(checkedWindowSize),
        ...restNodeProps,
      }),
    )

    const newObserverElement: ObserverElement = {
      observedElement: subscriber.observedElement,
      managedNodes: updatedManagedNodes,
    }

    this.observers.push(newObserverElement)

    this.checkNewNodeElements(updatedManagedNodes)
    this.addResizeListener(newObserverElement)
  }

  private checkNewNodeElements(newManagedNodes: ManagedNodesType[]) {
    newManagedNodes.forEach(({ checkedWindowSize, isElementDisplayed, managedNode }) => {
      const isClientWidthAbove = isClientWidthAboveSize(checkedWindowSize)

      if (!isClientWidthAbove && !isElementDisplayed) {
        managedNode.remove()
      }
    })
  }

  private addResizeListener({ observedElement, managedNodes }: ObserverElement) {
    window.addEventListener('resize', () => {
      managedNodes.forEach((checkedManagedNode) => {
        const { checkedWindowSize, isElementDisplayed, managedNode, ...restProps } = checkedManagedNode
        const { insertType } = restProps
        const isClientWidthAbove = isClientWidthAboveSize(checkedWindowSize)

        if (isClientWidthAbove && !isElementDisplayed) {
          if (insertType === 'prepend' || insertType === 'append') {
            observedElement[insertType](managedNode)
          }

          if (insertType === 'before' || insertType === 'after') {
            const { beforeAfterElement } = restProps

            beforeAfterElement[insertType](managedNode)
          }

          checkedManagedNode.isElementDisplayed = true
        }
        if (!isClientWidthAbove && isElementDisplayed) {
          managedNode.remove()

          checkedManagedNode.isElementDisplayed = false
        }
      })
    })
  }
}
