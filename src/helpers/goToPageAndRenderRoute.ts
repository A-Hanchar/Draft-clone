import { DOMObserver } from 'observers'
import { renderComponent } from 'router'

export const goToPageAndRenderRoute = (href: string) => {
  window.history.pushState({}, '', href)
  DOMObserver.removeAllListeners()

  renderComponent()
}
