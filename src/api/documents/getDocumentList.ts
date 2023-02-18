import { auth } from 'api/config'
import { getUserRef } from 'api/refs'
import { SYMBOL } from 'enums'
import { listAll, getMetadata } from 'firebase/storage'

import { getDocumentContentById } from './getDocumentContentById'

export const getDocumentList = async () => {
  if (auth.currentUser) {
    const { items } = await listAll(getUserRef(auth.currentUser.uid))

    const documentData = await Promise.all(
      items.map(async (document) => {
        const metadata = await getMetadata(document)

        const date = new Date(metadata.updated)
        const [name, ext] = document.name.split(SYMBOL.DOT)

        const content = await getDocumentContentById(name!)

        return { content, date, name: name!, ext: ext! }
      }),
    )

    documentData.sort((a, b) => Number(b.date) - Number(a.date))

    return documentData
  }

  throw new Error(`Error at getting doc list. User is null`)
}
