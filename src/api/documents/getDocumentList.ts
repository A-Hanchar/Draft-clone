import { auth } from 'api/config'
import { getUserRef } from 'api/refs'
import { listAll, getMetadata } from 'firebase/storage'

import { getDocumentContentById } from './getDocumentContentById'

export const getDocumentList = async () => {
  if (auth.currentUser) {
    const { items } = await listAll(getUserRef(auth.currentUser.uid))

    const documentData = await Promise.all(
      items.map(async (document) => {
        const metadata = await getMetadata(document)

        const date = new Date(metadata.updated)
        const name = document.name

        const content = await getDocumentContentById(name.replace('.txt', ''))

        return { content, date, name }
      }),
    )

    documentData.sort((a, b) => Number(b.date) - Number(a.date))

    return documentData
  }

  return []
}
