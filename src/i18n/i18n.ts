import i18next from 'i18next'
import { renderComponent } from 'router'

import { LANGUAGE } from './LANGUAGE'
import { resources } from './resources'

export const i18n = i18next

i18n.init({
  lng: LANGUAGE.RU,
  resources,
})

i18n.on('languageChanged', () => {
  renderComponent()
})

export const t = (key: string) => {
  const translatedtext = i18n.t(key)

  return translatedtext
}
