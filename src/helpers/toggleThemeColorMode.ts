import { localStorageInstanse, THEME_COLOR_MODE_ATTRIBUTE } from 'instances'

export const toggleThemeColorMode = () => {
  const themeColorMode = localStorageInstanse.getThemeColorMode()

  document.documentElement.setAttribute(THEME_COLOR_MODE_ATTRIBUTE.DATA_THEME_MODE, themeColorMode)
}
