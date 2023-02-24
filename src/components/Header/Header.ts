import { createElementWithClassNameAndAppendNode } from 'helpers'
import { type PropsWithClassname } from 'types'

export const Header = ({ classname }: PropsWithClassname) =>
  createElementWithClassNameAndAppendNode({ tagName: 'header', children: 'Header', classname })
