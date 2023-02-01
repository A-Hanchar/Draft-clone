import { createElementWithClassNameAndAppendNode } from 'helpers'

export const Home = () =>
  createElementWithClassNameAndAppendNode({ tagName: 'div', children: 'Home Page', classname: 'text-blue-600' })
