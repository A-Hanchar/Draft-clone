import { Button } from 'components/Button'
import { Text } from 'components/Text'

import { createElementWithClassNameAndAppendNode, goToPageAndRenderRoute } from 'helpers'
import { routerPathes } from 'router'

import { type PreviewDocumentProps } from './types'

export const PreviewDocument = ({ id, previewText, date }: PreviewDocumentProps) => {
  const wrapperButtons = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex gap-2',
    children: [
      Button({
        appearanceType: 'success',
        children: 'open',
        textTransform: 'uppercase',
        weight: 700,
        onclick: () => {
          goToPageAndRenderRoute(`${routerPathes.documents}/${documentComponent.id}`)
        },
      }),
      Button({ appearanceType: 'alert', children: 'delete', textTransform: 'uppercase', weight: 700 }),
    ],
  })

  const content = Text({
    tagName: 'p',
    classname: 'line-clamp-1',
    children: [previewText],
  })

  const monthDay = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })

  const data = Text({
    textTransform: 'uppercase',
    tagName: 'p',
    children: monthDay,
    classname: 'pb-2 text-end border-b border-slate-300',
    color: 'neutral',
    weight: 700,
  })

  const documentComponent = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex flex-col gap-4',
    children: [wrapperButtons, content, data],
  })

  // TODO: remove this line after adding back-end to the project
  documentComponent.id = id.slice(0, -4)

  return documentComponent
}
