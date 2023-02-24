export type Resize = 'none' | 'vertical' | 'horizontal' | 'both'

export const resizeConfig: Record<Resize, string> = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
}
