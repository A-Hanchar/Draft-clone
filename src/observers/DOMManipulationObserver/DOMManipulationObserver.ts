/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { isClientWidthAboveSize } from 'helpers'

import { type ManagedNodesType, type NewObserverElement, type ObserverElement } from './types'

export class DOMManipulationObserver {
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

    this.checkNewNodeElements(updatedManagedNodes)
    this.addResizeListener(newObserverElement)
  }

  private checkNewNodeElements(newManagedNodes: ManagedNodesType[]) {
    newManagedNodes.forEach(({ isElementDisplayed, managedNode }) => {
      if (!isElementDisplayed) {
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
