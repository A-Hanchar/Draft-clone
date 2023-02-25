/* eslint-disable class-methods-use-this */
import i18next, { type i18n as i18nType, type Resource } from 'i18next'

import en from 'langs/en.json'
import ru from 'langs/ru.json'

export enum LANGUAGE {
  EN = 'en',
  RU = 'ru',
}

export const resources: Resource = {
  [LANGUAGE.EN]: {
    translation: en,
  },
  [LANGUAGE.RU]: {
    translation: ru,
  },
}

type ManagedTranslatedNode = {
  node: HTMLElement
  translatedKey: string
}

class I18n {
  i18n: i18nType
  managedNodes: ManagedTranslatedNode[]

  constructor() {
    this.i18n = this.initializationI18n()
    this.managedNodes = []
  }

  private initializationI18n() {
    const i18n = i18next

    i18n.init({
      lng: LANGUAGE.EN,
      resources,
    })

    i18n.on('languageChanged', () => {
      this.renderTranslatedText()
    })

    return i18n
  }

  subscribeManagedNode(subscribedNodes: ManagedTranslatedNode[]) {
    this.managedNodes.push(...subscribedNodes)
  }

  clearAllManagedNodes() {
    this.managedNodes.length = 0
  }

  renderTranslatedText() {
    this.managedNodes.forEach(({ node, translatedKey }) => {
      const text = this.i18n.t(translatedKey)

      node.replaceChildren(text)
    })
  }
}

export const i18n = new I18n()
export const l = i18n.i18n.t
