import { t } from 'i18n'

import { type ShortcutItem } from './types'

export const getShortcutsItems = (): ShortcutItem[] => [
  {
    value: t('shortcuts.ctrl_alt_f1.value'),
    description: t('shortcuts.ctrl_alt_f1.description'),
  },
  {
    value: t('shortcuts.ctrl_alt_s.value'),
    description: t('shortcuts.ctrl_alt_s.description'),
  },
  {
    value: t('shortcuts.ctrl_alt_o.value'),
    description: t('shortcuts.ctrl_alt_o.description'),
  },
  {
    value: t('shortcuts.ctrl_alt_b.value'),
    description: t('shortcuts.ctrl_alt_b.description'),
  },
  {
    value: t('shortcuts.ctrl_alt_q.value'),
    description: t('shortcuts.ctrl_alt_q.description'),
  },
]
