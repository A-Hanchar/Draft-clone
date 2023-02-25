import i18next from 'i18next'

import en from 'langs/en.json'
import ru from 'langs/ru.json'

export enum LANGUAGE {
  EN = 'en',
  RU = 'ru',
}

export const i18n = i18next

i18n.init({
  lng: LANGUAGE.EN,
  debug: true,
  resources: {
    [LANGUAGE.EN]: {
      translation: en,
    },
    [LANGUAGE.RU]: {
      translation: ru,
    },
  },
})

// const stack = []

// const qq = (key: string) => i18n.t(key)

export const l = i18n.t

// export const changeL = i18n.changeLanguage
