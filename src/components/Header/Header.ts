import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { type PropsWithClassname } from 'types'

import { Logo } from './Logo'

import { ToggleLanguage } from './ToggleLanguage'

export const Header = ({ classname }: PropsWithClassname) =>
  createElementWithClassNameAndAppendNode({
    tagName: 'header',
    children: [Logo(), ToggleLanguage()],
    classname: getTruthyClasses(['flex justify-between px-10 shadow-2xl', classname]),
  })
