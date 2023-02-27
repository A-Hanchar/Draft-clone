import { getDocumentContentById, updateDocument } from 'api'
import { Button } from 'components/Button'
import { Error } from 'components/Error'
import { Form } from 'components/Form'
import { createElementWithClassNameAndAppendNode, goToPageAndRenderRoute } from 'helpers'
import { t } from 'i18n'
import { keyboardShortcutsInstance } from 'instances'
import { getDocumentIdParam, routerPathes } from 'router'
import { colorsConfig } from 'variables/css'

export const Document = async () => {
  const { documentId = '' } = getDocumentIdParam()

  const toDocuments = () => {
    goToPageAndRenderRoute(routerPathes.documents)
  }

  const toDocumentsButton = Button({
    appearanceType: 'primary',
    children: t('button.toDocuments'),
    textTransform: 'uppercase',
    classname: 'h-10 max-w-[12rem]',
    weight: 700,
    onclick: toDocuments,
  })

  try {
    const content = await getDocumentContentById(documentId)

    const textArea = Form.Textarea({
      classname: `w-3/4 max-w-xl p-2 h-[90vh] focus:outline-none overflow: visible scrollbar-hide mx-auto ${colorsConfig.bg.lightGray}`,
      defaultValue: content,
      placeholder: t('documentPage.documentPlaceholder'),
    })

    textArea.addEventListener('keydown', (event) => {
      keyboardShortcutsInstance.ctrl_alt_s({
        event,
        callback: () => updateDocument({ documentId, content: textArea.value }),
      })
    })

    return createElementWithClassNameAndAppendNode({
      tagName: 'div',
      classname: 'flex justify-center gap-4 p-10 md:flex-col md:items-center',
      children: [toDocumentsButton, textArea],
    })
  } catch (error) {
    return Error({ error, classname: 'flex justify-start p-10' })
  }
}
