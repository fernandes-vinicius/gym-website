'use client'

import { Link, LinkProps } from 'react-scroll'

interface NavLinkProps extends LinkProps {}

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      className="cursor-pointer hover:text-orange"
    >
      {children}
    </Link>
  )
}
