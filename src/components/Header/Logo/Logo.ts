import { Home } from 'components/Icons/Home'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { t } from 'i18n'
import { routerPathes } from 'router'

export const Logo = () => {
  const title = Text({ tagName: 'h2', children: t('drafter'), weight: 700 })
  const iconHome = Home({})

  const fragment = document.createDocumentFragment()
  fragment.append(iconHome, title)

  return Link({
    href: routerPathes.documents,
    children: fragment,
    classname: 'flex items-center gap-1.5',
  })
}
