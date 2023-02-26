import './index.css'

import { KEYS } from 'enums'
import { darkInstance } from 'instances/StorageInstance'
import { renderComponent } from 'router'

window.addEventListener('load', renderComponent)
window.addEventListener('hashchange', renderComponent)
window.onpopstate = renderComponent

const dark = darkInstance.getTheme()
if (dark === KEYS.DARK) document.documentElement.classList.add(KEYS.DARK)
