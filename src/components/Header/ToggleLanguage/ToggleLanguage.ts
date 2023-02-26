import { Menu, type MenuItemsList, type MenuItem } from 'components/Menu'
import { changeLanguage, getLanguage, LANGUAGE } from 'i18n'

export const ToggleLanguage = () => {
  const menuItems: MenuItemsList<LANGUAGE> = [
    { key: LANGUAGE.EN, title: 'EN' },
    { key: LANGUAGE.RU, title: 'RU' },
  ]

  const activeItemIndex = menuItems.findIndex(({ key }) => key === getLanguage())

  const toggleLanguage = ({ key }: MenuItem<LANGUAGE>) => {
    changeLanguage(key)
  }

  const menu = Menu({
    elements: menuItems,
    onChange: toggleLanguage,
    activeItemIndex,
    openSide: 'right',
  })

  return menu
}
