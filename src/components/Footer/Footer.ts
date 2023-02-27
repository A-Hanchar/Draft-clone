import { GitHubLink } from 'components/GitHubLink'
import { IconGitHub, IconRSSchool } from 'components/Icons'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { t } from 'i18n'
import { DOMObserver } from 'observers'
import { type PropsWithClassname } from 'types'

export const Footer = ({ classname }: PropsWithClassname) => {
  const links = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex gap-4 md:text-xs',
    children: [
      GitHubLink({ username: t('gitHubUser.A-Hanchar.username'), name: t('gitHubUser.A-Hanchar.name') }),
      GitHubLink({ username: t('gitHubUser.yauheniZabotsin.username'), name: t('gitHubUser.yauheniZabotsin.name') }),
      GitHubLink({ username: t('gitHubUser.sohodoll.username'), name: t('gitHubUser.sohodoll.name') }),
    ],
  })

  const copyright = Text({
    tagName: 'p',
    children: t('copyright'),
    textTransform: 'uppercase',
    weight: 500,
    classname: 'md:text-xs',
  })

  const wrapperCopyright = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [links, copyright],
  })

  const gitLogo = IconGitHub({ width: 56 })

  const linksWrap = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex items-center',
    children: [gitLogo, wrapperCopyright],
  })

  const RSLink = Link({
    href: 'https://rs.school/js/',
    target: '_blank',
    children: IconRSSchool({ width: 64 }),
  })

  const footerWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'footer',
    children: [linksWrap, RSLink],
    classname: getTruthyClasses(['flex items-center justify-around text-sm', classname]),
  })

  DOMObserver.subscribe({
    observedElement: footerWrapper,
    managedNodes: [
      { checkedWindowSize: 767, insertType: 'append', managedNode: RSLink },
      { checkedWindowSize: 450, managedNode: gitLogo, insertType: 'before', beforeAfterElement: wrapperCopyright },
      { checkedWindowSize: 450, insertType: 'after', managedNode: copyright, beforeAfterElement: links },
    ],
  })

  return footerWrapper
}
