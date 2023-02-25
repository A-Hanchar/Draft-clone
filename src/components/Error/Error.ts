import { createElementWithClassNameAndAppendNode } from 'helpers'
import { t } from 'i18n'

import { type ErrorProps } from './types'

export const Error = ({ error, classname }: ErrorProps) =>
  createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname,
    children: [typeof error === 'string' ? error : t('error.undefinedError')],
  })
