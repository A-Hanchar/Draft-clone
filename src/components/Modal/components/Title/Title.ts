import { Text } from 'components/Text'

import { type TitleProps } from './types'

export const Title = ({ title }: TitleProps) =>
  Text({
    tagName: 'h2',
    children: title,
    classname: 'p-0 m-0 pb-3 mb-6 text-center text-4xl border-b border-solid border-gray-800',
  })
