import { Sidebar } from 'components/Sidebar'

import { getBodyClasses } from './getBodyClasses'
import styles from './styles.module.css'
import { type WithSidebarLayoutProps } from './types'
import { ExtendedLayout } from '../ExtendedLayout'

export const WithSidebarLayout = ({ children, withFooter = true, withHeader = true }: WithSidebarLayoutProps) => {
  const layout = ExtendedLayout({
    children,
    withFooter,
    withHeader,
    mainNodeProps: { classname: styles.main },
    bodyNodeProps: {
      classname: getBodyClasses({ withFooter, withHeader }),
    },
  })

  layout.main.before(Sidebar({ classname: styles.sidebar }))

  return layout
}
