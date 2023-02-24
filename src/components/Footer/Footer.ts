import gitHubLogo from 'assets/icons/png/github-logo.png'
import RSSvg from 'assets/icons/svg/rs_school_js.svg'
import { GitHubLink } from 'components/GitHubLink'
import { Image } from 'components/Image/Image'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { en } from 'langs'
import { DOMObserver } from 'observers'

import styles from './styles.module.css'

export const Footer = () => {
  const links = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex gap-4 md:text-xs',
    children: [
      GitHubLink({ username: en.gitHubUser['A-Hanchar'].username, name: en.gitHubUser['A-Hanchar'].name }),
      GitHubLink({ username: en.gitHubUser.yauheniZabotsin.username, name: en.gitHubUser.yauheniZabotsin.name }),
      GitHubLink({ username: en.gitHubUser.sohodoll.username, name: en.gitHubUser.sohodoll.name }),
    ],
  })

  const copyright = Text({
    tagName: 'p',
    children: en.copyright,
    textTransform: 'uppercase',
    weight: 500,
    classname: 'md:text-xs',
  })

  const wrapperCopyright = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [links, copyright],
  })

  const gitLogo = Image({ url: gitHubLogo, alt: en.gitHub, classname: 'w-14' })

  const linksWrap = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex items-center',
    children: [gitLogo, wrapperCopyright],
  })

  const RSLink = Link({
    href: 'https://rs.school/js/',
    target: '_blank',
    children: Image({ url: RSSvg, alt: en.rsSchool, classname: 'w-16' }),
  })

  const footerWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'footer',
    children: [linksWrap, RSLink],
    classname: getTruthyClasses(['flex', 'items-center', 'justify-around', 'text-sm', styles.footer]),
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
