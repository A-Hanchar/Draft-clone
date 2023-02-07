import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { openModalWithContent } from 'helpers'
import { type PropsWithClassname } from 'types'

export const HelpButton = ({ classname = '' }: PropsWithClassname) => {
  const modal = Modal({ children: 'Modal Help Content', title: 'Support Information' })

  return Button({
    children: 'Help',
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: `relative ${classname}`,
    onclick: () => {
      openModalWithContent(modal)
    },
  })
}
