import { auth, getStorageRef } from 'api'

import { uploadBytes } from 'firebase/storage'
import { createBlob, goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'

export const createDocument = async () => {
  const file = createBlob()
  try {
    if (auth.currentUser) {
      const docName = String(Date.now())
      await uploadBytes(getStorageRef(docName), file)

      goToPageAndRenderRoute(`${routerPathes.documents}/${docName}`)
    }
  } catch (err) {
    console.dir(err)
  }
}
