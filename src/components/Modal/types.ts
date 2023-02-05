import { type PropsWithChildren } from 'types'

export type ModalProps = PropsWithChildren<{ title: string; onCancel?: () => void }>
