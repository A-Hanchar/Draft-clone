import { Menu, type MenuItem, type MenuItemsList } from 'components/Menu'
import { toggleThemeColorMode as changeThemeColorMode } from 'helpers'
import { localStorageInstanse, THEME_COLOR_MODE } from 'instances'

export const ToggleColorMode = () => {
  const menuColorItems: MenuItemsList<THEME_COLOR_MODE> = [
    { key: THEME_COLOR_MODE.LIGHT, title: 'Light' },
    { key: THEME_COLOR_MODE.DARK, title: 'Dark' },
  ]

  const activeItemIndex = menuColorItems.findIndex(({ key }) => key === localStorageInstanse.getThemeColorMode())

  const toggleThemeColorMode = ({ key }: MenuItem<THEME_COLOR_MODE>) => {
    const currentColorTheme = localStorageInstanse.getThemeColorMode()

    if (currentColorTheme !== key) {
      localStorageInstanse.setThemeColorMode(key)
      changeThemeColorMode()
    }
  }

  const menu = Menu({
    elements: menuColorItems,
    onChange: toggleThemeColorMode,
    activeItemIndex,
    openSide: 'right',
  })

  return menu
}
