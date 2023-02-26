import { Menu, type MenuItemsList, type MenuItem } from 'components/Menu'
import { changeLanguage, getLanguage, LANGUAGE } from 'i18n'
import { localStorageInstanse } from 'instances'

export const ToggleLanguage = () => {
  const menuItems: MenuItemsList<LANGUAGE> = [
    { key: LANGUAGE.EN, title: 'EN' },
    { key: LANGUAGE.RU, title: 'RU' },
    { key: LANGUAGE.FR, title: 'FR' },
  ]

  const activeItemIndex = menuItems.findIndex(({ key }) => key === getLanguage())

  const toggleLanguage = ({ key }: MenuItem<LANGUAGE>) => {
    const currentLanguage = getLanguage()

    if (currentLanguage !== key) {
      localStorageInstanse.setLanguage(key)
      changeLanguage(key)
    }
  }

  const menu = Menu({
    elements: menuItems,
    onChange: toggleLanguage,
    activeItemIndex,
    openSide: 'right',
  })

  return menu
}
