import { Text } from 'components/Text'

import { type DocumentDateProps } from './types'

export const DocumentDate = ({ date }: DocumentDateProps) =>
  Text({
    textTransform: 'uppercase',
    tagName: 'p',
    // TODO: convert date for languages
    children: date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    }),
    classname: 'pb-2 text-end border-b border-slate-300',
    color: 'neutral',
    weight: 700,
  })
