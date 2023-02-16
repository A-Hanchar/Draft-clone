import { auth, getStorageRef } from 'api'
import { Button } from 'components/Button'
import { uploadBytes } from 'firebase/storage'
import { goToPageAndRenderRoute, createBlob } from 'helpers'
import { routerPathes } from 'router'

export const CreateDocumentButton = () => {
  const createDocument = async () => {
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

  return Button({
    appearanceType: 'success',
    children: 'New Document',
    textTransform: 'uppercase',
    classname: 'self-start',
    rounded: false,
    weight: 700,
    onclick: createDocument,
  })
}
