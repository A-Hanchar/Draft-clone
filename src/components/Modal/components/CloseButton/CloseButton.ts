import { Button } from 'components/Button'

import { type CloseButtonProps } from './types'

export const CloseButton = ({ onclick }: CloseButtonProps) =>
  Button({
    classname: 'top-1.5 right-1.5 bg-transparent border-none w-6 h-6',
    onclick,
    appearanceType: 'close',
    closeButtonColor: 'red',
    closeButtonPosition: 'absolute',
  })
