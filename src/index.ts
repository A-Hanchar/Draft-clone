import './index.css'

import { toggleThemeColorMode } from 'helpers'
import { renderComponent } from 'router'

window.addEventListener('load', () => {
  renderComponent()
  toggleThemeColorMode()
})
window.addEventListener('hashchange', renderComponent)
window.onpopstate = renderComponent
