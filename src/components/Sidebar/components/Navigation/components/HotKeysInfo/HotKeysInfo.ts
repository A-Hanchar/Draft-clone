import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { t } from 'i18n'
import { colorsConfig } from 'variables/css'

import { getShortcutsItems } from './getShortcutsItems'

export const HotKeysInfo = () => {
  const title = Text({
    tagName: 'h2',
    children: t('shortcutsTitle'),
    textTransform: 'uppercase',
    weight: 700,
    classname: 'text-xl',
  })

  const shortcutsItems = getShortcutsItems()

  const shortcutsList = createElementWithClassNameAndAppendNode({
    tagName: 'ul',
    children: shortcutsItems.map(({ value, description }) => {
      const valueText = Text({ tagName: 'span', weight: 700, children: value })

      const li = createElementWithClassNameAndAppendNode({
        tagName: 'li',
        children: [valueText, description],
        classname: colorsConfig.text.darkGray,
      })

      return li
    }),
    classname: 'list-none',
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [title, shortcutsList],
    classname: 'flex flex-col gap-4',
  })

  return wrapper
}
