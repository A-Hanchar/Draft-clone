import { getDocumentIdParam } from 'router'

export const Document = () => {
  const { documentId } = getDocumentIdParam()

  const div = document.createElement('div')

  div.append(`Document Page: id - ${documentId ?? ''}`)

  return div
}
