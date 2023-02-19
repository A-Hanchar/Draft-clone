import './index.css'

import { getLocalStorage } from 'helpers/getLocalStorage'
import { renderComponent } from 'router'

window.addEventListener('load', renderComponent)
window.addEventListener('hashchange', renderComponent)
window.onpopstate = renderComponent

const dark = getLocalStorage('dark')
if (dark) document.documentElement.classList.add('dark')
