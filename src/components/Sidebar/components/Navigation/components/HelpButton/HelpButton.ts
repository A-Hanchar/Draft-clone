import { Button } from 'components/Button'
import { Link } from 'components/Link'
import { Modal } from 'components/Modal'
import { Text } from 'components/Text'
import { getTruthyClasses } from 'helpers'
import { t } from 'i18n'
import { keyboardShortcutsInstance } from 'instances'
import { type PropsWithClassname } from 'types'

export const HelpButton = ({ classname }: PropsWithClassname) => {
  const link = Link({
    classname: 'underline',
    href: 'https://github.com/A-Hanchar/Draft-clone/issues',
    children: t('gitHub'),
    target: '_blank',
    weight: 700,
  })

  const helpText = Text({
    tagName: 'p',
    children: [t('modal.help.content'), link],
  })

  const modal = Modal({
    children: helpText,
    title: t('modal.help.title'),
  })

  document.addEventListener('keydown', (event) => {
    keyboardShortcutsInstance.ctrl_alt_f1({
      event,
      callback: modal.handleOpen,
    })
  })

  return Button({
    children: t('button.help'),
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
    onclick: modal.handleOpen,
  })
}
