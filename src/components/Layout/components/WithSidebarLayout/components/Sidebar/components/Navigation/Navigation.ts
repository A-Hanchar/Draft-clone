import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'

import { HelpButton } from './components/HelpButton'
import { LogOutButton } from './components/LogOutButton'
import { SettingButton } from './components/SettingButton'
import styles from './styles.module.css'

export const Navigation = () => {
  const navigation = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [
      SettingButton({ classname: styles.button }),
      LogOutButton({ classname: styles.button }),
      HelpButton({ classname: styles.button }),
    ],
    classname: getTruthyClasses(['flex', 'gap-6', styles.navigation]),
  })

  return navigation
}
