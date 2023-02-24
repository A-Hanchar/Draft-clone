import { getTruthyClasses } from 'helpers'

import styles from './styles.module.css'
import { type ExtendedLayoutProps } from './types'

export const getBodyClasses = ({ withFooter, withHeader }: ExtendedLayoutProps) => {
  const bodyClasses: Array<string | undefined> = [styles.body]

  if (withHeader && withFooter) {
    bodyClasses.push(styles['with-header-and-footer'])
  }

  if (withHeader && !withFooter) {
    bodyClasses.push(styles['with-header'])
  }

  if (!withHeader && withFooter) {
    bodyClasses.push(styles['with-footer'])
  }

  if (!withHeader && !withFooter) {
    bodyClasses.push(styles['content-only'])
  }

  return getTruthyClasses(bodyClasses)
}
