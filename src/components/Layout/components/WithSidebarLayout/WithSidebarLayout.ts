import { Body } from 'components/Body'
import { createElementWithClassNameAndAppendNode, replaceAllClassnameToElement } from 'helpers'
import { type PropsWithChildren } from 'types'
import { colorsConfig } from 'variables/css'

import { Sidebar } from './components/Sidebar'

export const WithSidebarLayout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = createElementWithClassNameAndAppendNode({
    tagName: 'main',
    children,
    classname: 'pr-6 basis-2/3',
  })

  replaceAllClassnameToElement({
    element: Body,
    classname: `flex min-h-screen pt-6 ${colorsConfig.bg.lightGray} ${colorsConfig.bg.darkSlate} md:flex-col p-10 gap-y-14`,
  })

  fragment.append(Sidebar(), main)

  return fragment
}
