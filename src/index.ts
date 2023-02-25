// import { i18n } from './i18n/i18n'
import './index.css'

import { renderComponent } from 'router'
// import { Body } from 'components/Body'
// import { Text } from 'components/Text'
// import { changeL, l } from 'i18n'

window.addEventListener('load', renderComponent)
window.addEventListener('hashchange', renderComponent)
window.onpopstate = renderComponent

// const button = document.createElement('button')
// button.innerText = 'Change lng'

// const q = () => l('homePage.title')

// button.onclick = () => changeL('ru')

// const txt = Text({ tagName: 'h1', children: q() })

// i18n.on('languageChanged', (event) => {
//   console.log(event)

//   txt.innerText = q()
// })

// Body.append(txt, button)

// useTranslation

// changeLanguage
