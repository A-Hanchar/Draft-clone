import { Body } from 'components/Body'

import { startAnimationDrawer } from './animation'

export const handleDrawerOpen =
  ({ modal }: { modal: HTMLDivElement }) =>
  () => {
    Body.append(modal)

    startAnimationDrawer(800, modal, 'right')
  }
