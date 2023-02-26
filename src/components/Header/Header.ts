import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { type PropsWithClassname } from 'types'

import { Logo } from './Logo'

import { ToggleColorMode } from './ToggleColorMode'

import { ToggleLanguage } from './ToggleLanguage'

export const Header = ({ classname }: PropsWithClassname) => {
  const appHandlerWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [ToggleColorMode(), ToggleLanguage()],
    classname: 'flex gap-4',
  })

  const header = createElementWithClassNameAndAppendNode({
    tagName: 'header',
    children: [Logo(), appHandlerWrapper],
    classname: getTruthyClasses(['flex justify-between px-10 shadow-2xl', classname]),
  })

  return header
}
