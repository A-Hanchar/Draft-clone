import { SYMBOL } from 'enums'
import { urlInstance } from 'helpers'
import { routerPathes } from 'router/routerPathes'

export const getDocumentIdParam = () => {
  const { pathname } = urlInstance.getUrl()

  if (pathname.includes(routerPathes.documents)) {
    const documentsParams = pathname.replace(`${routerPathes.documents}${SYMBOL.SLASH}`, '')

    const [documentId] = documentsParams.split(SYMBOL.SLASH)

    return {
      documentId,
    }
  }

  throw new Error('pathname must to start from "documents"')
}
