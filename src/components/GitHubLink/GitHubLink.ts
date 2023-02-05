import { Link } from 'components/Link'

import { type GitHubLinkProps } from './types'

export const GitHubLink = ({ username, name }: GitHubLinkProps) =>
  Link({
    href: `https://github.com/${username}`,
    target: '_blank',
    classname: 'flex',
    children: name,
  })
