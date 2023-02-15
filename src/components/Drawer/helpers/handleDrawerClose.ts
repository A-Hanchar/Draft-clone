import { startAnimationDrawer } from './animation'

export const handleDrawerClose =
  ({ modal, onCancel }: { modal: HTMLDivElement; onCancel?: () => void }) =>
  () => {
    onCancel?.()

    startAnimationDrawer(800, modal, 'left')
  }
