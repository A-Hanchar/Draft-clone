import { Sidebar } from 'components/Sidebar'

import { getBodyClasses } from './getBodyClasses'
import { type WithSidebarLayoutProps } from './types'
import { ExtendedLayout } from '../ExtendedLayout'

export const WithSidebarLayout = ({ children, withFooter, withHeader }: WithSidebarLayoutProps) => {
  const layout = ExtendedLayout({
    children,
    withFooter,
    withHeader,
    mainNodeProps: { classname: 'pr-10' },
    bodyNodeProps: {
      classname: getBodyClasses({ withFooter, withHeader }),
    },
  })

  layout.main.before(Sidebar({ classname: 'pl-10' }))

  return layout
}
