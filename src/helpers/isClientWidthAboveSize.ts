import { type ScreenBreakpoints } from 'types'

export const isClientWidthAboveSize = (size: ScreenBreakpoints) => document.documentElement.clientWidth > size
