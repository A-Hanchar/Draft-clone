import homeIcon from 'assets/icons/png/home.png'
import { Image } from 'components/Image'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { t } from 'i18n'

export const Title = () => {
  const title = Text({ tagName: 'h2', children: t('draft'), weight: 700 })
  const iconHome = Image({ alt: t('draftIcon'), url: homeIcon, classname: 'w-6 h-6' })

  return createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [iconHome, title],
    classname: 'flex items-center gap-1.5',
  })
}
