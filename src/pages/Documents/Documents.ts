import { Error } from 'components/Error'

import { renderDocumentList } from './helpers'

export const Documents = async () => {
  try {
    return await renderDocumentList()
  } catch (error) {
    return Error({ error })
  }
}
