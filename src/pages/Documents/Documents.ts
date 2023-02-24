import { Error } from 'components/Error'

import { DocumentsWrapper } from './components/DocumentsWrapper'

export const Documents = async () => {
  try {
    return await DocumentsWrapper()
  } catch (error) {
    return Error({ error })
  }
}
