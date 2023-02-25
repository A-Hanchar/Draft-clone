import { Button } from 'components/Button'
import { Link } from 'components/Link'
import { Modal } from 'components/Modal'
import { Text } from 'components/Text'
import { getTruthyClasses } from 'helpers'
import { en } from 'langs'
import { type PropsWithClassname } from 'types'

export const HelpButton = ({ classname }: PropsWithClassname) => {
  const link = Link({
    classname: 'underline',
    href: 'https://github.com/A-Hanchar/Draft-clone/issues',
    children: en.gitHub,
    target: '_blank',
    weight: 700,
  })

  const helpText = Text({
    tagName: 'p',
    children: [en.modal.help.content, link],
  })

  const modal = Modal({
    children: helpText,
    title: en.modal.help.title,
  })

  return Button({
    children: en.button.help,
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
    onclick: modal.handleOpen,
  })
}
