import { Text } from 'components/Text'

import { type TitleProps } from './types'

export const Title = ({ title }: TitleProps) =>
  Text({ tagName: 'h2', innerText: title, classname: 'p-0 m-0 mb-8 text-4xl border-b border-solid border-gray-800' })
