import { auth, storage } from 'api'
import { Button } from 'components/Button'
import { uploadBytes, ref } from 'firebase/storage'
import { goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'

export const CreateDocumentButton = () => {
  const createDocument = async () => {
    const file = new Blob([], {
      type: 'text/plain',
    })
    try {
      if (auth.currentUser) {
        const docName = Date.now()
        await uploadBytes(ref(storage, `${auth.currentUser.uid}/${docName}.txt`), file)

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
