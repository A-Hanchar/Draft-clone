import './index.css'

import { darkInstance } from 'helpers/instances/StorageInstance'
import { renderComponent } from 'router'

window.addEventListener('load', renderComponent)
window.addEventListener('hashchange', renderComponent)
window.onpopstate = renderComponent

const dark = darkInstance.getTheme()
if (dark === 'dark') document.documentElement.classList.add('dark')
