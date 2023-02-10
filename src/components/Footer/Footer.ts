import gitHubLogo from 'assets/icons/png/github-logo.png'
import RSSvg from 'assets/icons/svg/rs_school_js.svg'
import { GitHubLink } from 'components/GitHubLink'
import { Image } from 'components/Image/Image'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode, getTruthyClasses } from 'helpers'
import { DOMObserver } from 'observers'

import styles from './styles.module.css'

export const Footer = () => {
  const links = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex gap-4 md:text-xs',
    children: [
      GitHubLink({ username: 'A-Hanchar', name: 'Artsiom Hanchar' }),
      GitHubLink({ username: 'yauheniZabotsin', name: 'Yauheni Zabotsin' }),
      GitHubLink({ username: 'sohodoll', name: 'Vitaly Kovalev' }),
    ],
  })

  const copyright = Text({
    tagName: 'p',
    innerText: '© 2023',
    textTransform: 'uppercase',
    weight: 500,
    classname: 'md:text-xs',
  })

  const wrapperCopyright = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [links, copyright],
  })

  const gitLogo = Image({ url: gitHubLogo, alt: 'gitHub', classname: 'w-14' })

  const linksWrap = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex items-center ',
    children: [gitLogo, wrapperCopyright],
  })

  const RSLink = Link({
    href: 'https://rs.school/js/',
    target: '_blank',
    children: Image({ url: RSSvg, alt: 'RSS', classname: 'w-16' }),
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
    ],
  })

  DOMObserver.subscribe({
    observedElement: wrapperCopyright,
    managedNodes: [{ checkedWindowSize: 450, insertType: 'append', managedNode: copyright }],
  })

  return footerWrapper
}
