import { createDocument } from 'api'
import { Button } from 'components/Button'
import { goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'

export const CreateDocumentButton = () => {
  const handleClick = async () => {
    try {
      button.setDisable(true)
      button.setLoading(true)

      const docId = await createDocument()

      if (docId) {
        goToPageAndRenderRoute(`${routerPathes.documents}/${docId}`)
      }
    } catch (error) {
    } finally {
      button.setDisable(false)
      button.setLoading(false)
    }
  }

  const button = Button({
    appearanceType: 'success',
    children: 'New Document',
    textTransform: 'uppercase',
    classname: 'self-start',
    rounded: false,
    weight: 700,
    onclick: handleClick,
  })

  return button
}
