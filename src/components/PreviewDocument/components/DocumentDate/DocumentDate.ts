import { Text } from 'components/Text'
import { getLanguage } from 'i18n'

import { type DocumentDateProps } from './types'

export const DocumentDate = ({ date }: DocumentDateProps) =>
  Text({
    textTransform: 'uppercase',
    tagName: 'p',
    children: date.toLocaleDateString(getLanguage(), {
      month: 'short',
      day: 'numeric',
    }),
    classname: 'pb-2 text-end border-b border-slate-300',
    color: 'neutral',
    weight: 700,
  })
