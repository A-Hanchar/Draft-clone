import { createElementWithClassName } from 'helpers'

import { type ImageProps } from './types'

export const Image = ({ url, alt, classname }: ImageProps) => {
  const img = createElementWithClassName({
    tagName: 'img',
    classname,
  })

  img.src = url
  img.alt = alt

  return img
}
