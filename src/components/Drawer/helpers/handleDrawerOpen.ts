import { Body } from 'components/Body'

import { startAnimationDrawer } from './animation'

export const handleDrawerOpen = ({ modal }: { modal: HTMLDivElement }) => {
  return () => {
    Body.append(modal)

    startAnimationDrawer(400, modal, true)
  }
}
