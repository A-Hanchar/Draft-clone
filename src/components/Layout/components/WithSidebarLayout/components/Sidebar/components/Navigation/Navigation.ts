import { createElementWithClassNameAndAppendNode } from 'helpers'

import { HelpButton } from './components/HelpButton'
import { LogOutButton } from './components/LogOutButton'
import { SettingButton } from './components/SettingButton'

export const Navigation = () => {
  const navigation = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [SettingButton(), LogOutButton(), HelpButton()],
    classname: 'flex gap-2',
  })

  return navigation
}
