export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none'

export const textTransformConfig: Record<TextTransform, string> = {
  uppercase: 'uppercase',
  capitalize: 'capitalize',
  lowercase: 'lowercase',
  none: 'normal-case',
}
