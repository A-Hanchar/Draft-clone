import { getTruthyClasses } from 'helpers'

import styles from './styles.module.css'
import { type ExtendedLayoutProps } from './types'

export const getBodyClasses = ({ withFooter, withHeader }: ExtendedLayoutProps) => {
  const bodyClasses: Array<string | undefined> = ['grid', 'gap-y-8', 'min-h-screen']

  if (withHeader && withFooter) {
    bodyClasses.push('grid-rows-[auto_1fr_auto]', styles['with-header-and-footer'])
  }

  if (withHeader && !withFooter) {
    bodyClasses.push('grid-rows-[auto_1fr]', styles['with-header'])
  }

  if (!withHeader && withFooter) {
    bodyClasses.push('grid-rows-[1fr_auto]', styles['with-footer'])
  }

  if (!withHeader && !withFooter) {
    bodyClasses.push(styles['content-only'])
  }

  return getTruthyClasses(bodyClasses)
}
