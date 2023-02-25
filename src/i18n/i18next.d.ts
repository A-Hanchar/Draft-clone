import 'i18next'
import type en from './en.json'
import type ru from './ru.json'

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    // defaultNS: 'ns1'
    resources: {
      en: typeof en
      ru: typeof ru
    }
  }
}
