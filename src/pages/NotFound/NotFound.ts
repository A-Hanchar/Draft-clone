import { Body } from 'components/Body'
import { Button } from 'components/Button'
import { Link } from 'components/Link'
import { Modal } from 'components/Modal'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { routerPathes } from 'router'

export const NotFound = () => {
  const modalContent = createElementWithClassNameAndAppendNode({
    tagName: 'div',
  })

  const modal = Modal({ children: modalContent, title: 'Congrats' })

  const openModal = () => {
    Body.append(modal)
  }

  const button = Button({ children: 'Open Modal', onclick: openModal })

  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [
      Text({ tagName: 'h1', innerText: 'Error: 404', classname: 'text-9xl m-0', weight: 900 }),
      Text({ tagName: 'h2', innerText: 'Page Not Fount', classname: 'text-6xl', weight: 700 }),
      Link({
        href: routerPathes.home,
        children: 'Go Home',
        appearance: 'button',
        appearanceButtonColor: 'success',
        classname: 'text-xl min-w-[15.625rem] flex justify-center',
        weight: 600,
      }),
      button,
    ],
    classname: 'flex flex-col justify-center items-center h-full gap-6',
  })
}
