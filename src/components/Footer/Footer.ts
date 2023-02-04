import gitHubSvg from 'assets/icons/svg/github.svg'
import RSSvg from 'assets/icons/svg/rs_school_js.svg'
import { GitHubLink } from 'components/GitHubLink'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { createElementWithClassName } from 'helpers/createElementWithClassName'

export const Footer = () => {
  const svgLogo = createElementWithClassName({ tagName: 'img', classname: 'w-14' })
  svgLogo.src = gitHubSvg

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
    children: [svgLogo, links],
  })

  const year = Text({ tagName: 'p', innerText: '2023' })

  const RSLogo = createElementWithClassNameAndAppendNode({ tagName: 'img', classname: 'w-16' })
  RSLogo.src = RSSvg

  const RSLink = Link({
    href: 'https://rs.school/js/',
    target: '_blank',
    classname: 'block',
    children: RSLogo,
  })

  return createElementWithClassNameAndAppendNode({
    tagName: 'footer',
    children: [linksWrap, year, RSLink],
    classname: 'flex items-center justify-around',
  })
}
