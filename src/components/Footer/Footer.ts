import gitHubLogo from 'assets/icons/png/github-logo.png'
import RSSvg from 'assets/icons/svg/rs_school_js.svg'
import { GitHubLink } from 'components/GitHubLink'
import { Image } from 'components/Image/Image'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'

export const Footer = () => {
  const links = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex gap-4',
    children: [
      GitHubLink({ username: 'A-Hanchar', name: 'Artsiom Hanchar' }),
      GitHubLink({ username: 'yauheniZabotsin', name: 'Yauheni Zabotsin' }),
      GitHubLink({ username: 'sohodoll', name: 'Vitaly Kovalev' }),
    ],
  })

  const copyright = Text({ tagName: 'p', innerText: '© 2023', textTransform: 'uppercase', weight: 500 })
  const wpapperCopyright = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [links, copyright],
  })

  const linksWrap = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex items-center ',
    children: [Image({ url: gitHubLogo, alt: 'gitHub', classname: 'w-14' }), wpapperCopyright],
  })

  const RSLink = Link({
    href: 'https://rs.school/js/',
    target: '_blank',
    children: Image({ url: RSSvg, alt: 'RSS', classname: 'w-16' }),
  })

  return createElementWithClassNameAndAppendNode({
    tagName: 'footer',
    children: [linksWrap, RSLink],
    classname: `flex items-center justify-around text-sm ${styles.footer ?? ''}`,
  })
}
