import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { type PropsWithClassname } from 'types'

import { ToggleLanguage } from './ToggleLanguage'

export const Header = ({ classname }: PropsWithClassname) =>
  createElementWithClassNameAndAppendNode({
    tagName: 'header',
    children: ToggleLanguage(),
    classname: getTruthyClasses(['flex justify-end px-10 shadow-2xl', classname]),
  })
