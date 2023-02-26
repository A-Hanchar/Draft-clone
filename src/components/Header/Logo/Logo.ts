import homeIcon from 'assets/icons/png/home.png'
import { Image } from 'components/Image'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { t } from 'i18n'
import { routerPathes } from 'router'

export const Logo = () => {
  const title = Text({ tagName: 'h2', children: t('drafter'), weight: 700 })
  const iconHome = Image({ alt: t('draftIcon'), url: homeIcon, classname: 'w-6 h-6' })

  const fragment = document.createDocumentFragment()
  fragment.append(iconHome, title)

  return Link({
    href: routerPathes.documents,
    children: fragment,
    classname: 'flex items-center gap-1.5',
  })
}
