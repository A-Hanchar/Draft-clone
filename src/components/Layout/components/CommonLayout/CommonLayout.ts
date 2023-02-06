import { Body } from 'components/Body'
import { Footer } from 'components/Footer'
import { addClassnameToElement, createElementWithClassNameAndAppendNode } from 'helpers'
import { type PropsWithChildren } from 'types'
import { colorsConfig } from 'variables/css'

export const CommonLayout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = createElementWithClassNameAndAppendNode({
    tagName: 'main',
    children,
  })

  addClassnameToElement({
    element: Body,
    classname: `grid grid-rows-[1fr_auto] min-h-screen ${colorsConfig.bg.lightGray}`,
  })

  fragment.append(main, Footer({}))

  return fragment
}
