import gitHubSvg from 'assets/icons/svg/github.svg'
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
    classname: 'flex  gap-2',
    children: [Image({ url: gitHubSvg, alt: 'gitHub', classname: 'w-14' }), links],
  })

  const year = Text({ tagName: 'p', innerText: '2023' })

  const RSLink = Link({
    href: 'https://rs.school/js/',
    target: '_blank',
    classname: 'block',
    children: Image({ url: RSSvg, alt: 'RSS', classname: 'w-16' }),
  })

  return createElementWithClassNameAndAppendNode({
    tagName: 'footer',
    children: [linksWrap, year, RSLink],
    classname: 'flex items-center justify-around',
  })
}
