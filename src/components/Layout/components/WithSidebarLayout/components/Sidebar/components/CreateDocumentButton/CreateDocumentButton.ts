import { createDocument } from 'api'
import { Button } from 'components/Button'
import { goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'

const handleClick = async () => {
  try {
    const docId = await createDocument()

    if (docId) {
      goToPageAndRenderRoute(`${routerPathes.documents}/${docId}`)
    }
  } catch (error) {}
}

export const CreateDocumentButton = () =>
  Button({
    appearanceType: 'success',
    children: 'New Document',
    textTransform: 'uppercase',
    classname: 'self-start',
    rounded: false,
    weight: 700,
    onclick: handleClick,
  })
