import { startAnimationDrawer } from './animation'

export const handleDrawerClose = ({ modal, onCancel }: { modal: HTMLDivElement; onCancel?: () => void }) => {
  return () => {
    onCancel?.()

    startAnimationDrawer(800, modal, false)
  }
}
