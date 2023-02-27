import { Body } from 'components/Body'
import { IconSpinner } from 'components/Icons'
import { createElementWithClassNameAndAppendNode, replaceAllClassnameToElement } from 'helpers'
import { colorsConfig } from 'variables/css'

export const Loading = () => {
  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: IconSpinner({}),
    classname: 'w-screen h-screen flex items-center justify-center',
  })

  replaceAllClassnameToElement({
    element: Body,
    classname: colorsConfig.bg.lightGray,
  })

  return wrapper
}
