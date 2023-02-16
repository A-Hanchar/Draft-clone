import { Button } from 'components/Button'
import { colorsConfig } from 'variables/css'

import { type CloseButtonProps } from './types'

export const CloseButton = ({ onclick }: CloseButtonProps) =>
  Button({
    classname: `top-1.5 right-1.5 ${colorsConfig.bg.transparent} border-none w-6 h-6`,
    onclick,
    appearanceType: 'close',
    closeButtonPosition: 'absolute',
  })
