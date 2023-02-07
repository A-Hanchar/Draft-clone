import { SYMBOL } from 'enums'
import { type Falsy } from 'types'

export const getTruthyClasses = (array: Array<string | Falsy>) => array.filter(Boolean).join(SYMBOL.SPACE)
