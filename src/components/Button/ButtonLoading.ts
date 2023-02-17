import { createElementWithClassName, getTruthyClasses } from 'helpers'

import styles from './styles.module.css'
import { type ButtonLoadingProps } from './types'

export const ButtonLoader = ({ rounded }: ButtonLoadingProps) => {
  const wrapper = createElementWithClassName({
    tagName: 'div',
    classname: getTruthyClasses([
      rounded && 'rounded',
      'absolute',
      'flex',
      'justify-center',
      'w-full',
      'h-full',
      'top-0',
      'left-0',
      'gap-1',
      styles.loader,
    ]),
  })

  for (let i = 0; i < 5; i += 1) {
    const div = createElementWithClassName({ tagName: 'div', classname: 'w-1 h-full bg-current' })

    wrapper.append(div)
  }

  return wrapper
}
