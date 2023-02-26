import './index.css'

import { renderComponent } from 'router'
// eslint-disable-next-line import/order
import { localStorageInstanse } from 'instances'

import { THEME_COLOR_MODE } from 'variables/css'

window.addEventListener('load', () => {
  renderComponent()

  const dark = localStorageInstanse.getThemeColorMode()
  if (dark === THEME_COLOR_MODE.DARK) document.documentElement.classList.add(THEME_COLOR_MODE.DARK)
})
window.addEventListener('hashchange', renderComponent)
window.onpopstate = renderComponent
