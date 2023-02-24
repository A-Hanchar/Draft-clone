import { getTruthyClasses } from 'helpers'

import styles from './styles.module.css'
import { type ExtendedLayoutProps } from '../ExtendedLayout'

export const getBodyClasses = ({ withHeader, withFooter }: ExtendedLayoutProps) => {
  const bodyClasses: Array<string | undefined> = ['grid', 'min-h-screen', 'gap-y-8', 'grid-cols-[1fr_2fr]']

  if (withHeader && withFooter) {
    bodyClasses.push(styles['with-header-and-footer'], 'grid-rows-[auto_1fr_auto]')
  }

  if (withHeader && !withFooter) {
    bodyClasses.push(styles['with-header'], 'grid-rows-[auto_1fr]')
  }

  if (!withHeader && withFooter) {
    bodyClasses.push(styles['with-footer'], 'grid-rows-[1fr_auto]', 'pt-6')
  }

  if (!withHeader && !withFooter) {
    bodyClasses.push(styles['sidebar-only'], 'pt-6')
  }

  return getTruthyClasses(bodyClasses)
}
