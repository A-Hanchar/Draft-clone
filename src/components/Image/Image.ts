import { createElementWithClassNameAndAppendNode } from 'helpers'

import { type ImageProps } from './types'

export const Image = ({ url, alt, classname = '' }: ImageProps) => {
  const img = createElementWithClassNameAndAppendNode({
    tagName: 'img',
    classname: `${classname}`,
  })

  img.src = url
  img.alt = alt

  return img
}
