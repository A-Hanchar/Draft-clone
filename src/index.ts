import './index.css'

import { renderComponent } from 'router'

window.addEventListener('load', renderComponent)
window.addEventListener('hashchange', renderComponent)
window.onpopstate = renderComponent
