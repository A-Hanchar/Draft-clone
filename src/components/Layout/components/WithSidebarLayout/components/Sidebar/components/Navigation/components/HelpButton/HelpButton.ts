import { Button } from 'components/Button'
import { Link } from 'components/Link'
import { Modal } from 'components/Modal'
import { Text } from 'components/Text'
import { getTruthyClasses } from 'helpers'
import { type PropsWithClassname } from 'types'

export const HelpButton = ({ classname }: PropsWithClassname) => {
  const link = Link({
    classname: 'underline',
    href: 'https://github.com/A-Hanchar/Draft-clone/issues',
    children: 'GitHub.',
    target: '_blank',
    weight: 700,
  })

  const helpText = Text({
    tagName: 'p',
    children: ['Please leave any enquiries or suggestions in the issues tab on ', link],
  })

  const modal = Modal({
    children: helpText,
    title: 'Get In Touch',
  })

  return Button({
    children: 'Help',
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
    onclick: modal.handleOpen,
  })
}
