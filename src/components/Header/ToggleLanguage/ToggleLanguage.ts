import { Menu, type MenuItemsList, type MenuItem } from 'components/Menu'
import { i18n, LANGUAGE } from 'i18n'

export const ToggleLanguage = () => {
  const menuItems: MenuItemsList<LANGUAGE> = [
    { key: LANGUAGE.EN, title: 'EN' },
    { key: LANGUAGE.RU, title: 'RU' },
  ]

  const activeItemIndex = menuItems.findIndex(({ key }) => key === i18n.language)

  const toggleLanguage = ({ key }: MenuItem<LANGUAGE>) => {
    i18n.changeLanguage(key)
  }

  const menu = Menu({
    elements: menuItems,
    onChange: toggleLanguage,
    activeItemIndex,
    openSide: 'right',
  })

  return menu
}
