import { Link } from 'components/Link'

import { type GitHubLinkProps } from './types'

export const GitHubLink = ({ username, name, classname }: GitHubLinkProps) =>
  Link({
    href: `https://github.com/${username}`,
    target: '_blank',
    classname,
    children: name,
    rounded: false,
  })
