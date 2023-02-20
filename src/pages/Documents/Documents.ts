import { Error } from 'components/Error'

import { getDocumentsWrapper } from './helpers'

export const Documents = async () => {
  try {
    return await getDocumentsWrapper()
  } catch (error) {
    return Error({ error })
  }
}
