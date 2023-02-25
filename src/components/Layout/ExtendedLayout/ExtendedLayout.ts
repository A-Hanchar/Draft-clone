import { Body } from 'components/Body'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { createElementWithClassNameAndAppendNode, getTruthyClasses, replaceAllClassnameToElement } from 'helpers'
import { colorsConfig } from 'variables/css'

import { getBodyClasses } from './getBodyClasses'
import styles from './styles.module.css'
import { type ExtendedLayoutOwnProps } from './types'

export const ExtendedLayout = ({
  children,
  withFooter,
  withHeader,
  mainNodeProps,
  bodyNodeProps,
}: ExtendedLayoutOwnProps) => {
  const fragment = document.createDocumentFragment()

  const main = createElementWithClassNameAndAppendNode({
    tagName: 'main',
    children,
    classname: getTruthyClasses([mainNodeProps?.classname ?? styles.main]),
  })

  replaceAllClassnameToElement({
    element: Body,
    classname: getTruthyClasses([
      bodyNodeProps?.classname ?? getBodyClasses({ withFooter, withHeader }),
      colorsConfig.bg.lightGray,
      colorsConfig.bg.darkSlate,
    ]),
  })

  fragment.append(main)

  if (withHeader) {
    fragment.prepend(Header({ classname: styles.header }))
  }

  if (withFooter) {
    fragment.append(Footer({ classname: styles.footer }))
  }

  return Object.assign(fragment, { main })
}
