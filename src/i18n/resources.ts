import { type Resource } from 'i18next'

import en from 'langs/en.json'
import fr from 'langs/fr.json'
import ru from 'langs/ru.json'

import { LANGUAGE } from './LANGUAGE'

export const resources: Resource = {
  [LANGUAGE.EN]: {
    translation: en,
  },
  [LANGUAGE.RU]: {
    translation: ru,
  },
  [LANGUAGE.FR]: {
    translation: fr,
  },
}
