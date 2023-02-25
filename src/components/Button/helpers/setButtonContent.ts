import { createElementWithClassNameAndAppendNode } from 'helpers'
import { type ChildrenNode } from 'types'

export const setButtonContent = ({ initialContent }: { initialContent?: ChildrenNode }) => {
  const buttonContent = createElementWithClassNameAndAppendNode({ tagName: 'div', children: initialContent })

  const setContent = (content: ChildrenNode) => {
    buttonContent.replaceChildren(content)
  }

  return Object.assign(buttonContent, { setContent })
}
