import { getTruthyClasses } from 'helpers'

import styles from './styles.module.css'
import { type ExtendedLayoutProps } from '../ExtendedLayout'

export const getBodyClasses = ({ withHeader, withFooter }: ExtendedLayoutProps) => {
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
    bodyClasses.push(styles['sidebar-only'])
  }

  return getTruthyClasses(bodyClasses)
}
