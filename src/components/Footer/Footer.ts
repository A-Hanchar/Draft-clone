import gitHubLogo from 'assets/icons/png/github-logo.png'
import RSSvg from 'assets/icons/svg/rs_school_js.svg'
import { GitHubLink } from 'components/GitHubLink'
import { Image } from 'components/Image/Image'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

export const Footer = () => {
  const links = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [
      GitHubLink({ username: 'A-Hanchar', name: 'Artsiom Hanchar' }),
      GitHubLink({ username: 'yauheniZabotsin', name: 'Yauheni Zabotsin' }),
      GitHubLink({ username: 'sohodoll', name: 'Vitaly Kovalev' }),
    ],
  })

  const linksWrap = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex',
    children: [Image({ url: gitHubLogo, alt: 'gitHub', classname: 'w-32' }), links],
  })

  const year = Text({ tagName: 'p', innerText: '2023' })

  const RSLink = Link({
    href: 'https://rs.school/js/',
    target: '_blank',
    children: Image({ url: RSSvg, alt: 'RSS', classname: 'w-32' }),
  })

  return createElementWithClassNameAndAppendNode({
    tagName: 'footer',
    children: [linksWrap, year, RSLink],
    classname: 'flex items-center justify-around',
  })
}
