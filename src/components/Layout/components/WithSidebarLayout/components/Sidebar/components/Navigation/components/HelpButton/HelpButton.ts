import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { openModalWithContent } from 'helpers'

export const HelpButton = () => {
  const modal = Modal({ children: 'Modal Help Content', title: 'Congrats' })

  return Button({
    children: 'Help',
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    onclick: () => {
      openModalWithContent(modal)
    },
  })
}
