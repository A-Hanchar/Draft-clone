import gitHubSvg from 'assets/icons/svg/github.svg'
import RSSvg from 'assets/icons/svg/rs_school_js.svg'
import { Link } from 'components/Link'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { createElementWithClassName } from 'helpers/createElementWithClassName'

export const Footer = () => {
  const svgLogo = createElementWithClassName({ tagName: 'img', classname: 'w-14' })
  svgLogo.src = gitHubSvg

  const aHanchar = Link({
    href: 'https://github.com/A-Hanchar',
    target: '_blank',
    classname: 'block',
  })
  aHanchar.innerText = 'Artsiom Hanchar'

  const aSohodoll = Link({
    href: 'https://github.com/sohodoll',
    target: '_blank',
    classname: 'block',
  })
  aSohodoll.innerText = 'Vitaly Kovalev'

  const aZabotsin = Link({
    href: 'https://github.com/yauheniZabotsin',
    target: '_blank',
    classname: 'block',
  })
  aZabotsin.innerText = 'Yauheni Zabotsin'

  const links = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: [aHanchar, aSohodoll, aZabotsin],
  })

  const linksWrap = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: 'flex  gap-2',
    children: [svgLogo, links],
  })

  const year = createElementWithClassNameAndAppendNode({ tagName: 'p', children: '2023' })

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
