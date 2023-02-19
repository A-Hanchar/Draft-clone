import { toggleClassnameToElement } from 'helpers'

export const nightMode = () => {
  toggleClassnameToElement({ element: document.documentElement, classname: 'dark' })
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('dark', JSON.stringify(true))
  } else {
    localStorage.setItem('dark', JSON.stringify(false))
  }
}
