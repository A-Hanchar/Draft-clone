import { createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'

export const Header = () =>
  createElementWithClassNameAndAppendNode({ tagName: 'header', children: 'Header', classname: styles.header })
